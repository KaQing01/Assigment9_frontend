import SearchForm from '../components/SearchForm';

export default function Home() {
    return (
        <div>
            <h1 className="text-3xl font-bold underline">Search for Flights</h1>
            <SearchForm />
        </div>
    );
}
