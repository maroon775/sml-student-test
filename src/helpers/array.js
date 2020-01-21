/**
 * @param {{id: number, name: string}} idName
 * @returns {{label: string, value: number}}
 */
export function labelValue(idName) {
    return {label: idName.name, value: idName.id};
}

/**
 * @param id
 * @param name
 * @returns {{id, name}}
 */
export function idName(id, name) {
    return {
        id, name
    };
}

/**
 * @param key
 * @param text
 * @param value
 * @returns {{key, text, value}}
 */
export function keyTextValue(key, text, value = null) {
    return {key, text, value: value || key};
}
