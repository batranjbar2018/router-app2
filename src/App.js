import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NotFound from './components/NotFound';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import Albums from './components/Albums';
import AlbumDetail from './components/AlbumDetail';
import Comments from './components/Comments';
import  CommentDetail from './components/CommentDetail';
import Search from './components/Search';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
        <Route path="/" component={Home}  exact/>
        <Route path ="/about" component={About} exact/>
        <Route path ="/blog" component={Blog} exact/>
        <Route path ="/blog/:id" component={BlogPost}/>
        <Route path ="/albums" component={Albums} exact/>
        <Route path ="/albums/:id" component={AlbumDetail}/>
        <Route path ="/comments" component={Comments} exact/>
        <Route path ="/comments/:id" component={CommentDetail}/>
        <Route path="/search" component={Search}></Route>
        <Route  component={NotFound}/>
        </Switch>
        </div>
    </Router>

  );
}

export default App;
