
const initState = {
    projects: [
        {id: '1', title: 'Salsa', content: 'Dima likes dancing Salsa with Tanya'},
        {id: '2', title: 'Bachata', content: 'Dima likes dancing Bachata with Tanya'},
        {id: '3', title: 'Kizomba', content: 'Dima likes dancing Kizomba with Tanya'}
    ]
}


const projectReducer = (state = initState, action) => {

    switch (action.type) {
        case 'ADD_PROJECT':
        console.log('project added', action.project)
        return state

        case 'ADD_PROJECT_ERROR':
            console.log('there was an error', action.err)
            return state
        
        default:
            return state
    }

}

export default projectReducer

