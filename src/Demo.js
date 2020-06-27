import React from 'react';
import {useState, } from 'react';
import SearchBox from './SearchBox'
import './Demo.css';
import 'tachyons';
import Demolist from './Demolist'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
    
     const Demo = (props) => {
        const [list, setList] = useState([
            {id: 0, name: 'Abdullah', post: 'CEO', email: 'amir@gmail.com'},
            {id: 1, name: 'Khuram', post: 'GM', email: 'am7r@gmail.com'},
            {id: 2, name: 'Naeem', post: 'PM',  email: 'ami3r@gmail.com'},
            {id: 3, name: 'Sameer', post: 'TM',  email: 'am4r@gmail.com'},
        ]);

        var a = Array('a', 1, {naeem: 'test'})

        const [query, setQuery] = useState('')
        const [filteredList, setFilteredList] = useState(list)



        const demoList = filteredList.map((post) =>
            <Demolist key={post.id} id={post.id} name={post.name} ng-for="" work={post.post} email={post.email} />
        );

        const search = (e) => {
            let query = e.target.value
            let regex = new RegExp(query, 'i')
            setQuery(query)
            
            let filteredList = list.filter(item => item.name.search(regex) >= 0)

            
            setFilteredList(filteredList)
            
        }

        return ( 
            <div className="main">
                <nav class="navbar navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
</nav>

            
                <h1>WELL COME TO KHURAM OFFICE</h1>

                <input className="main ma4 bg-light-blue dib pa1" value={query} onChange={search}  type='text' placeholder='search person' />
                <div>
                    { demoList }
                </div>
                
                

                {/* <Demolist id="2" name="Naeem" work="Back End Developer" />
                <Demolist id="3" name="Sameer" work="System Analysit" />
                <Demolist id="4" name="Abdullah" work="Designer" /> */}
                 <button>Subscribe</button>
                <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form> 
                
            </div>
        )

        
     }

export default Demo;