import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import FlightList from '../components/FlightList';
import NoResults from '../components/NoResults';
import { Link } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';

const GET_FLIGHTS = gql`
    query GetFlights($from: String, $to: String) {
        flights(from: $from, to: $to) {
            id
            from
            to
            price
            airline
            departureTime
        }
    }
`;

export default function Results() {
    const [searchParams] = useSearchParams();
    const from = searchParams.get('from');
    const to = searchParams.get('to');

    if (!from || !to) {
        return <p>Waiting for search
        parameters...</p>;
    }

    const { loading, error, data } =
    useQuery(GET_FLIGHTS, {
        variables: { from, to },
    });
    
    if (loading) return <p>Loading flights...</p>;
    if (error) return <p>Error loading flights.</p>;

    const flights = data?.flights || [];

    if (flights.length === 0) return <NoResults from={from} to={to} />;
    
    return (
        <div>
            <h2 class="text-light bg-dark">Flights from {from} to {to}</h2>
            <FlightList flights={flights} />
            <Link to="/"><button class="btn btn-secondary">Back to Search</button></Link>
         </div>
    );
}
