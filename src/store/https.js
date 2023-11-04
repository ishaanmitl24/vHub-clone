export const fetchData = async()=>{
    const apiUrl = 'https://vedasis-prod-bsng2qeg2a-uc.a.run.app/vedasis/lists/public/get_list_details';
    const headers = new Headers({
      'List_id': 'VFZfVCpwHZnQhVae66gW',
    });
    const requestOptions = {
      method: 'GET',
      headers: headers,
    };
   const response = await fetch(apiUrl, requestOptions);
   if(!response.ok){
    throw new Error('Fetching Failed');
   }
   const data = await response.json();
   return data;
}