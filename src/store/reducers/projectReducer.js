const initState = {
    all_projects : [
        {id : 1, title: 'Number One Project', content: 'just some dummy content one' },
        {id : 2, title: 'Number Two Project', content: 'just some dummy content two' },
        {id : 3, title: 'Number Three Project', content: 'just some dummy content three' },
        {id : 4, title: 'Number Four Project', content: 'just some dummy content four' },
        {id : 5, title: 'Number Five Project', content: 'just some dummy content five' }
    ]
}


const projectReducer = (state = initState, action) => {

    switch(action.type) {

        case 'CREATE_PROJECT':
            console.log("Project Created! ", action.project);
            return state;

        case 'CREATE_PROJECT_ERROR':
            console.log("Project Creation Error ", action.err);
            return state;

        case 'EDIT PROJECT':
            //HJFSBSS
        break;

        case 'DELETE_PROJECT':
            //HJFSSSFFS
        break;
        
        default:
            // console.log("Default project Reducer Case");
            return state;            
    }

}

export default projectReducer