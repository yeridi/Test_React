import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
//Component
import Error from '../components/main/error'
import Index from '../components/pages/index'
import Opinion from '../components/pages/opinion'
import Model from '../components/pages/model'

function Router(){
    return(
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/inicio' component={Index}/>
                    <Route exact path='/inicio/opinion' component={Opinion}/>
                    <Route exact path='/inicio/modelos' component={Model}/>
                    <Route component={Error} />
                </Switch>
            </BrowserRouter>
        </>
    )
}
export default Router