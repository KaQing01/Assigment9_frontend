import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SearchForm() 
{
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!from || !to) return;
        navigate(`/results?from=${from}&to=${to}`);
    };

    return (
        <form className="container mt-4 p-4 border rounded" style={{ maxWidth: "450px" }} onSubmit={handleSubmit}>
            <div className="mb-3">
                <label className="form-label">From: </label>
                <input className="form-control" type="text" value={from} onChange={(e) => setFrom(e.target.value)} />
            </div>
            <br />
            <div className="mb-3">
                <label className="form-label"> To:</label>
                <input className="form-control" type="text" value={to} onChange={(e) => setTo(e.target.value)} />
            </div>
            <br />
            <div className="d-flex justify-content-end mt-4">
                <button type="submit" className="btn btn-primary">Search Flights</button>
            </div>
        </form>
    );
}