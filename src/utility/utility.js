function isNull(obj) {
    return !obj;
}

function isNullOrEmpty(obj) {
    return !obj || obj.lenght == 0;
}

function sortArrByProp(arr, prop) {
    return arr.sort((a, b) => {
        if (a[prop] < b[prop]) return -1;
        if (a[prop] > b[prop]) return 1;
    })
}

function removeSpace(s) {
    return s.replace(/\s/g, '');
}

function generateGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
}

module.exports = {
    isNull: isNull,
    isNullOrEmpty: isNullOrEmpty,
    sortArrByProp: sortArrByProp,
    removeSpace: removeSpace,
    generateGuid: generateGuid
}