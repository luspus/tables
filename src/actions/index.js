const getDataToTable = (from, to) => dispatch => {
    const asyncGetRows = () => {
        return dispatch => {
            fetch(`http://urban-trans.net/ua/admin/get_photos_new.php?from=${from}&to=${to}`)
            .then(response => response.json())
            .then(res => {
                console.log(res)
                const data = res.data;
                dispatch({ type: 'GET_DATA_TO_TABLE', data })
            })
            .catch(errors => {
                console.log(errors)
            })
        }
    };
    dispatch(asyncGetRows())
};

const togglePopup = val => ({
    type: 'TOGGLE_POPUP',
    val
});

const saveTable = obj => ({
    type: 'SAVE_TABLE',
    obj
});

const deleteAll = click => ({
    type: 'DELETE_ALL',
    click
});

const cleanAll = () => ({
    type: 'CLEAN_ALL'
});

export default {
    togglePopup,
    saveTable,
    deleteAll,
    getDataToTable,
    cleanAll
};
