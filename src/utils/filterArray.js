export const getFilteredData = (data, searchValue) => {
    let filteredData = [...data];

    filteredData = filteredData.filter(
        (item) =>
            item.title.toLowerCase().startsWith(searchValue) ||
            item.author.toLowerCase().startsWith(searchValue) ||
            item.category.toLowerCase().startsWith(searchValue)
    );

    return filteredData;
}