import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Header from './Header'
import NewHomePage from './NewHomePage'
// import CirclesPageParams from './CirclesPageParams' 
import CirclesPage from './CirclesPage'
import AboutPage from './AboutPage'
import styles from './App.module.css'


const App = () => {

    return ( 

        <div className={styles.bg}>
        <Header />

        <Switch>
            <Route exact path='/' component={NewHomePage} />
            <Route path = '/circles' component={CirclesPage} />
            {/* <Route path='/circles/:id' component={CirclesPageParams}/> */}
            <Route path='/about' component={AboutPage}/>
            <Redirect to='/' />
        </Switch>
    
        
       
     
        </div>
     );
}
 
export default App;