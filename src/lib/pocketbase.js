// JavaScript SDK
import PocketBase from "pocketbase";

const pb = new PocketBase(process.env.REACT_APP_PB_URL);
export default pb;
/* 
...

// list and search for 'example' collection records
const list = await pb.collection('example').getList(1, 100, {
    filter: 'title != "" && created > "2022-08-01"',
    sort: '-created,title',
});

// or fetch a single 'example' collection record
const record = await pb.collection('example').getOne('RECORD_ID');

// delete a single 'example' collection record
await pb.collection('example').delete('RECORD_ID');

// create a new 'example' collection record
const newRecord = await pb.collection('example').create({
    title: 'Lorem ipsum dolor sit amet',
});

// subscribe to changes in any record from the 'example' collection
pb.collection('example').subscribe('*', function (e) {
    console.log(e.record);
});

// stop listening for changes in the 'example' collection
pb.collection('example').unsubscribe(); */
