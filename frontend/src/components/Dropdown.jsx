const Dropdown = ({ selectedStatus, handleStatusChange }) => {
    return (
        <div>
            <label htmlFor="statusFilter">Filter by status: </label>
            <select id="statusFilter" value={selectedStatus} onChange={handleStatusChange}>
                <option value="All">All</option>
                <option value="Active">Active</option>
                <option value="Closed">Closed</option>
            </select>
        </div>
    );
};

export default Dropdown;
