import React from 'react';

type filterTyeps= {
    type: string
    label: string
}

const filters: filterTyeps[] = [
    { type: 'all', label: 'すべて'},
    { type: 'active', label: '作業中'},
    { type: 'completed', label: '完了'},
];

type handleFilterProps = {
    handleFilter: (e: React.ChangeEvent<HTMLInputElement>)=> void
    selectedFilter: string
}

export const TodoFilter:React.VFC<handleFilterProps> = ({handleFilter, selectedFilter}:handleFilterProps) => {
    return (
        <div>
            {filters.map((filter) => (
                <label key={filter.type}>
                    <input
                        type='radio'
                        value={filter.type}
                        checked={filter.type === selectedFilter}
                        onChange={handleFilter}
                    />
                    {filter.label}
                </label>
            ))}
        </div>
    )
}
