import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetch_donor } from './api/apiCalls';

// First, create the thunk
export const fetchDonors = createAsyncThunk(
    'donor/fetchDonors',
    async () => {
        fetch_donor()
        // .then(data => console.log(data))
        // console.log(data);
        // return response.data
    }
)

const donorSlice = createSlice({
    name: 'book',
    initialState: {
        donorList: [],
        status: 'idle'
    },
    reducers: {
        addDonor: (state, { payload }) => {
            state.donorList.push(payload)
        },
        removeDonor: (state, { payload }) => {
            state.donorList = state.donorList.filter(donor => donor.id !== payload.id);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchDonors.fulfilled, (state, action) => {
            state.data = action.payload;
            state.status = 'success'
        })
        builder.addCase(fetchDonors.pending, (state, action) => {
            state.status = 'pending';
        })
    },

});

export const { addDonor, removeDonor } = donorSlice.actions;
export default donorSlice.reducer;

