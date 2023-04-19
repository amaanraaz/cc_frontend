import { createSlice,current } from "@reduxjs/toolkit";

const fieldSlice = createSlice({
    name : "field",
    initialState : {
        items : [{
            name: "",
            type: "string",
            required : false,
            children : {}
        }],
    },
    reducers : {
        addItem : (state,action)=>{
            state.items.push(action.payload);
        },
        addName:(state,action)=>{
            const index = action.payload.index;
            const name = action.payload.curr_name;
            state.items[index].name=name;
        },
        addType:(state,action)=>{
            const index = action.payload.index;
            const type = action.payload.curr_type;
            state.items[index].type=type;
        },
        addReq:(state,action)=>{
            const index = action.payload.index;
            state.items[index].required = (!state.items[index].required);
        },
        addChild:(state,action)=>{
            const index = action.payload.index.index;
            const childName = action.payload.value.name;
            const childReq = action.payload.value.req;
            const childNum = action.payload.childNumber;
            console.log(action.payload);
            // console.log(current(state.items[index]));
            state.items[index].children[childNum]={childName,childReq};
        },
        deleteField:(state,action)=>{
            const index = action.payload.index;
            let curr = [...current(state.items)];
            curr.splice(index,1);
            state.items = [...curr];
        },
    }
});

export const {addItem,addName,addType,addReq,addChild,deleteField} = fieldSlice.actions;
export default fieldSlice.reducer;
