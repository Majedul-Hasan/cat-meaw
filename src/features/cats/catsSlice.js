import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addACat, editACat, deleteACat, getAllCats, getACat, patchClickCount } from "./catsApi";

const initialState = {
    cats : [],
    cat : {
        id: 1,
        name: 'tabby',
        image: 'https://plus.unsplash.com/premium_photo-1661508614319-b5e40d1143bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        click: 1
      },
    isLoading: false,
    isError: false,
    error: '',
    editing:{}
}


//AsyncThunks
const fetchCats = createAsyncThunk('cats/fetchCats', async () =>{
    const cats = await getAllCats()
    return cats
}) 
const fetchCat = createAsyncThunk('cats/fetchCat', async (id) =>{
    const cat = await getACat(id)
    return cat
}) 
const createCat = createAsyncThunk('cats/createCat', async (data) =>{
    const cat = await addACat(data)
    return cat
}) 
const updateCat = createAsyncThunk('cats/updateCat', async ({id,data}) =>{
    const cat = await editACat(id, data)
    return cat
}) 
const patchClick = createAsyncThunk('cats/patchClicks', async ({id,click}) =>{
    const cat = await patchClickCount(id, click)
    return cat
}) 
const removeACat = createAsyncThunk('cats/removeCat', async (id) =>{
    const cat = await deleteACat(id)
    return cat
}) 


//createSlice
const catSlice = createSlice({
    name: "cats",
    initialState,
    reducers: {
        editActive:(state, action)=>{
            state.editing = action.payload
        },
        editInactive:(state, action)=>{
            state.editing = {}
        },    
        updateClick:(state, action)=>{
            state.cats.find(c=>c.id === action.payload && c.click++)
        },    
    },

    extraReducers : (builder)=>{
        builder
            .addCase(fetchCats.pending, (state, action)=>{
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(fetchCats.fulfilled, (state, action)=>{
                state.isError = false;
                state.isLoading = false;
                state.cats = action.payload.data;
            })
            .addCase(fetchCats.rejected, (state, action)=>{
                state.isError = true;
                state.isLoading = false;
                state.cats = [];
                state.error = action.error.message
            })
            .addCase(fetchCat.pending, (state, action)=>{
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(fetchCat.fulfilled, (state, action)=>{
                state.isError = false;
                state.isLoading = false;
                state.cat = action.payload.data;
            })
            .addCase(fetchCat.rejected, (state, action)=>{
                state.isError = true;
                state.isLoading = false;
                state.cat = {};
                state.error = action.error.message
            })
            .addCase(createCat.pending, (state, action)=>{
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(createCat.fulfilled, (state, action)=>{
                state.isError = false;
                state.isLoading = false;
                state.cats.unshift(action.payload);
            })
            .addCase(createCat.rejected, (state, action)=>{
                state.isError = true;
                state.isLoading = false;
                state.error = action.error.message
            })

            .addCase(updateCat.pending, (state, action)=>{
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(updateCat.fulfilled, (state, action)=>{
                state.isError = false;
                state.isLoading = false;
                const indexToUpdate = state.cats.findIndex(cat=>cat.id === action.payload.id);

                state.cats[indexToUpdate] = action.payload;
                
            })
            .addCase(updateCat.rejected, (state, action)=>{
                state.isError = true;
                state.isLoading = false;
                state.error = action.error.message
            })
            

            .addCase(patchClick.pending, (state, action)=>{
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(patchClick.fulfilled, (state, action)=>{
                state.isError = false;
                state.isLoading = false;
                state.cat.click +=1;
                
            })
            .addCase(patchClick.rejected, (state, action)=>{
                state.isError = true;
                state.isLoading = false;
                state.error = action.error.message
            })

            .addCase(removeACat.pending, (state, action)=>{
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(removeACat.fulfilled, (state, action)=>{
                state.isError = false;
                state.isLoading = false;
                state.cats = state.cats.filter(cat=>cat.id !== action.payload)

                
            })
            .addCase(removeACat.rejected, (state, action)=>{
                state.isError = true;
                state.isLoading = false;
                state.error = action.error.message
            })



    }

})

export default catSlice.reducer
export const {editActive, editInactive, updateClick} = catSlice.actions

export {fetchCats, fetchCat, createCat, removeACat, updateCat, patchClick}