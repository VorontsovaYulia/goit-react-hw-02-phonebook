export const Filter = ({filter}) => {
    
   const handleFilter = (evt) => {
       filter(evt.currentTarget.value)
    }
        return (
            <label>Find contacts by name
                <input onChange={handleFilter} name="filter" />
            </label>
        )    
}

