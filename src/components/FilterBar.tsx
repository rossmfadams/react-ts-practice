interface FilterBarProps {
    filter: 'all' | 'active' | 'completed';
    onChange: (filter: 'all' | 'active' | 'completed') => void;
}

export const FilterBar = ({ filter, onChange}: FilterBarProps) => {
    const filters: FilterBarProps['filter'][] = ['all', 'active', 'completed'];

    return (
        <div style={{ marginTop: '1rem'}}>
            <h3>Filters: </h3>
            {filters.map(f => (
                <button
                    key={f}
                    onClick={() => onChange(f)}
                    style={{
                        marginRight: '0.5rem',
                        fontWeight: filter === f ? 'bold': 'normal'
                    }}
                >
                    {f}
                </button>
            ))}
        </div>
    );
};