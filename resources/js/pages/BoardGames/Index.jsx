import React from 'react';
import { useForm } from '@inertiajs/react';

export default function Index({ boardGames }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        title: '',
        genre: '',
        players_count: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/board-games', { onSuccess: () => reset() });
    };

    return (
        <div style={{ maxWidth: '800px', margin: '20px auto', fontFamily: 'sans-serif' }}>
            <h1>Каталог настільних ігор</h1>
            
            <form onSubmit={handleSubmit} style={{ border: '1px solid #ccc', padding: '20px', marginBottom: '20px' }}>
                <div style={{ marginBottom: '10px' }}>
                    <label>Назва гри:</label>
                    <input 
                        type="text" 
                        value={data.title} 
                        onChange={e => setData('title', e.target.value)} 
                        style={{ width: '100%' }} 
                    />
                    {errors.title && <span style={{ color: 'red' }}>{errors.title}</span>}
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label>Жанр:</label>
                    <input 
                        type="text" 
                        value={data.genre} 
                        onChange={e => setData('genre', e.target.value)} 
                        style={{ width: '100%' }} 
                    />
                    {errors.genre && <span style={{ color: 'red' }}>{errors.genre}</span>}
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label>Макс. кількість гравців:</label>
                    <input 
                        type="number" 
                        value={data.players_count} 
                        onChange={e => setData('players_count', e.target.value)} 
                        style={{ width: '100%' }} 
                    />
                    {errors.players_count && <span style={{ color: 'red' }}>{errors.players_count}</span>}
                </div>
                <button type="submit" disabled={processing}>Додати до каталогу</button>
            </form>

            <table border={1} cellPadding={10} style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Назва</th>
                        <th>Жанр</th>
                        <th>К-ть гравців</th>
                    </tr>
                </thead>
                <tbody>
                    {boardGames && boardGames.length > 0 ? (
                        boardGames.map((game) => (
                            <tr key={game.id}>
                                <td>{game.id}</td>
                                <td>{game.title}</td>
                                <td>{game.genre}</td>
                                <td>{game.players_count}</td>
                            </tr>
                        ))
                    ) : (
                        <tr><td colSpan="4" style={{ textAlign: 'center' }}>Каталог порожній</td></tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}