
export const updateObjectInArray = (items: Array<any>, itemId: string, objPropName: any, newObjProps: any) =>{

    return items.map(item => item[objPropName] === itemId
        ? {...item, ...newObjProps}
        : item)
}


