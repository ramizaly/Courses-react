import  './MainNavigation.css'

const MainNavigation = (props) =>
{
    return  <header className= 'header-container'>
     <nav class="navbar navbar-expand-lg bg-body-tertiary bg-white py-sm-0 py-2">
            <div class="container-fluid">
              <a class="navbar-brand ms-2">
                <h1><img src='./Books.png' ></img> Courses</h1>
              </a>
            </div>
          </nav>
  </header>
}

export default MainNavigation