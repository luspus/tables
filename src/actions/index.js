const getDataToTable = (from, to) => dispatch => {
    const asyncGetData = () => {
        return dispatch => {
            fetch(`http://urban-trans.net/ua/admin/get_photos_new.php?from=${from}&to=${to}`)
            .then(response => response.json())
            .then(res => {
                const data = res.data;
                dispatch({type: 'GET_DATA_TO_TABLE', data})
            })
            .catch(errors => {
                console.log(errors)
            })
        }
    };
    dispatch(asyncGetData());
};

const togglePopup = val => ({
    type: 'TOGGLE_POPUP',
    val
});

const saveTable = obj => ({
    type: 'SAVE_TABLE',
    obj
});

const deleteAll = () => ({
    type: 'DELETE_ALL'
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
