//action types
export const BUY_ITEM = "BUY_ITEM";
export const REMOVE_FEATURE = "REMOVE_FEATURE";

//action creator

export const buyItem = addItem => {
    //action
    return { type: 'BUY_ITEM', payload: addItem };
};

export const removeFeature = () => {

}