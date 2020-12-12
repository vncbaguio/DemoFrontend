import React,{ useState } from "react";
import Homepage1 from './components/homepage/Homepage';
import Footer from "./components/homepage/Footer";
import {
  Link,
  useLocation,
  Outlet,
  useRoutes,
  matchRoutes,
  useResolvedLocation,
} from "react-router-dom";

function NavLink({
  to,
  exact,
  className,
  activeClassName,
  inactiveClassName,
  ...rest
}) {
  let location = useLocation();
  let resolvedLocation = useResolvedLocation(to);
  let routeMatches = matchRoutes(routes, location);

  let isActive;
  if (exact) {
    isActive = location.pathname === resolvedLocation.pathname;
  } else {
    isActive = routeMatches.some(
      (match) => match.pathname === resolvedLocation.pathname
    );
  }

  let allClassNames =
    className + (isActive ? ` ${activeClassName}` : ` ${inactiveClassName}`);

  return <Link className={allClassNames} to={to} {...rest} />;
}

const routes = [
  {
    path: "/", 
    element: <p>
    <Homepage1/>
    </p>
  },
  {
    path: "/login", 
    element: <Login />
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      { 
        path: "/", 
        element: <p>Overview</p> 
      },
      { 
        path: "/new-users", 
        element:<p>

          New users
          </p>
        
        
      },
      { 
        path: "/sales", 
        element: <p>Sales</p> 
      },
    ],
  },
  { 
    path: "/transactions", 
    element: <Transactions />,
    children: [
      {
        path: "/",
        element: <Patients />
      }
    ], 
  },
  { 
    path: "/records", 
    element: <Records />,
    children: [
      {
        path: "/", 
        element: <p>Overview</p> 
      },
      {
        path: "/students", 
        element: <p>Students</p> 
      },
      {
        path: "/employees", 
        element: <p>Employees</p> 

      },
      {
        path: "/patients", 
        element: <Patients />
      }
    ] 
  },
  { 
    path: "/inventory", 
    element: <Inventory />,
    children: [
      { 
        path: "/", 
        element: <p>Overview</p> 
      },
      { 
        path: "/stocks", 
        element: <p>Stocks</p> 
      },      
      { 
        path: "/medicines", 
        element: <p>Medicines</p> 
      }
    ]
  },
  { 
    path: "/settings", 
    element: <Settings />,
    children: [
      { 
        path: "/", 
        element: <p>Overview</p> },
      { 
        path: "/accounts", 
        element: <Accountss /> 
      },
      { 
        path: "/departments", 
        element: <p>Department</p> },
      { 
        path: "/courses", 
        element: <p>Courses</p> 
      },
      { path: "/units", 
        element: <p>Units</p> 
      },
      { 
        path: "/accountlogs", 
        element: <p>Account Logs</p> 
      },
      { 
        path: "/medicinelogs", 
        element: <p>Medicine Logs</p> 
      },
    ] 
  },
];
 



export default function App() {
  const [Logged, setLogged] = useState(false);

  const onLogged = () => {
    console.log(element);
    setLogged(!Logged)
  };

  let element = useRoutes(routes);
  
  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-white border-b border-gray-200 mb-0">
        <div className=" max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
              {Logged ? 
                <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <div className="lg:block h-8 w-auto ">
                    <NavLink
                      className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-lg font-medium leading-5  transition duration-150 ease-in-out"
                      to="/"
                    >
                      WMSU Health Services
                    </NavLink>
                  </div>
                </div>
             <div className="hidden sm:-my-px sm:ml-6 sm:flex space-x-8">
                <NavLink
                  activeClassName="border-indigo-500 text-gray-900"
                  inactiveClassName="text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5  transition duration-150 ease-in-out"
                  to="/dashboard"
                >
                  Dashboard
                </NavLink>
                <NavLink
                  activeClassName="border-indigo-500 text-gray-900"
                  inactiveClassName="text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5  transition duration-150 ease-in-out"
                  to="/transactions"
                >
                  Transactions
                </NavLink>
                <NavLink
                  activeClassName="border-indigo-500 text-gray-900"
                  inactiveClassName="text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5  transition duration-150 ease-in-out"
                  to="/records"
                >
                  Records
                </NavLink>
                <NavLink
                  activeClassName="border-indigo-500 text-gray-900"
                  inactiveClassName="text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5  transition duration-150 ease-in-out"
                  to="/inventory"
                >
                  Inventory
                </NavLink>
                  <NavLink
                    activeClassName="border-indigo-500 text-gray-900"
                    inactiveClassName="text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5  transition duration-150 ease-in-out"
                    to="/settings"
                >
                    Settings
                </NavLink>
                <NavLink
                  activeClassName="border-indigo-500 text-gray-900"
                  inactiveClassName="text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5  transition duration-150 ease-in-out"
                      to="/" onClick={onLogged}
                >
                  Logout
                </NavLink> 
                  </div>
                  </div>
                
                  :  
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <div className="lg:block h-8 w-auto ">
                  <NavLink
                    className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-lg font-medium leading-5  transition duration-150 ease-in-out"
                    to="/"
                  >
                    WMSU Health Services
                    </NavLink>
                  </div>
                </div>
              </div>   
              }
            {Logged ?
              <div>
              </div>
            :
            <NavLink
                activeClassName="border-indigo-500 text-gray-900"
                inactiveClassName="text-gray-500 hover:text-gray-700 hover:border-gray-300"
                className="inline-flex  items-center  px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5  transition duration-150 ease-in-out"
                to="/login" onClick={onLogged}
            >
                Login
            </NavLink>
            }
        </div>
        </div>
      </nav>
      <div className="py-10">{element}</div>
    </div>
  );

}



function Login() {
  return (
          <main>
              <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="px-4 py-0 sm:px-0">
                      <div className="h-auto overflow-hidden flex items-center justify-center shadow">
                        <div className="bg-gray-200 rounded py-16 px-24 m-0 flex flex-col items-center justify-center">
                          <img className="rounded-full h-32 w-32" src="https://ssl.gstatic.com/accounts/ui/avatar_2x.png" alt="user avatar" />
                          <form method="post" className="mt-8 mb-4">
                            <div className="mb-4">
                              <label for="userEmail" className="sr-only">Username</label>
                              <input className="border-solid border border-gray-400 rounded px-2 py-3" type="email" id="userEmail" placeholder="Username" required />
                            </div>
                            <div>
                              <label for="userEmail" className="sr-only">Password</label>
                              <input className="border-solid border border-gray-400 rounded px-2 py-3" type="password" id="userPass" placeholder="Password" required />
                            </div>
                            <div className="my-4 flex items-center">
                              <input className="h-4 w-4 mr-2" type="checkbox" id="userRemember" />
                              <label for="userRemember">Remember me</label>
                            </div>
                            <Link to="/dashboard" ><button className="bg-gray-500 hover:bg-gray-600 text-white font-bold w-full py-3" type="submit">Sign in</button></Link>
                          </form>
                        </div>
                      </div>
                </div>
              </div>
        </main>
            
  );
}

function Patients() {
  return (
    <div class="mt-10 sm:mt-0">
    <div class="md:grid md:grid-cols-3 md:gap-6">
      <div class="md:col-span-1">
        <div class="px-4 sm:px-0">
          <h3 class="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
          <p class="mt-1 text-sm text-gray-600">
            Use a permanent address where you can receive mail.
          </p>
        </div>
      </div>
      <div class="mt-5 md:mt-0 md:col-span-2">
        <form action="#" method="POST">
          <div class="shadow overflow-hidden sm:rounded-md">
            <div class="px-4 py-5 bg-white sm:p-6">
              <div class="grid grid-cols-6 gap-6">

              <div class="col-span-6 sm:col-span-4">
                  <label for="patient_type" class="block text-sm font-medium text-gray-700">Patient Type</label>
                  <select id="Postition" name="Postition" autocomplete="Postition" class="mt-1 block w-80 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm w-80">
                    <option>Student</option>
                    <option>Employee</option>
                   
                  </select>
                  </div>

                <div class="col-span-6 sm:col-span-3">
                  <label for="Postition" class="block text-sm font-medium text-gray-700">Postition</label>
                  <select id="Postition" name="Postition" autocomplete="Postition" class="mt-1 block w-80 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm w-80">
                    <option>Registrar</option>
                    <option>Teacher</option>
                   
                  </select>
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label for="Course" class="block text-sm font-medium text-gray-700">Course</label>
                  <select id="Course" name="Course" autocomplete="Course" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ">
                    <option>Student</option>
                    <option>Employee</option>
                   
                  </select>
                </div>

              <div class="col-span-6 sm:col-span-4">
                  <label for="Student_id" class="block text-sm font-medium text-gray-700">ID</label>
                  <input type="text" name="Student_id" id="Student_id" autocomplete="Student_id" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-50 shadow-sm sm:text-sm border-gray-300 rounded-md bg-gray-200" />
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label for="first_name" class="block text-sm font-medium text-gray-700">First name</label>
                  <input type="text" name="first_name" id="first_name" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-80 shadow-sm sm:text-sm border-gray-300 rounded-md bg-gray-200" />
                </div>
  
                <div class="col-span-6 sm:col-span-3">
                  <label for="last_name" class="block text-sm font-medium text-gray-700">Last name</label>
                  <input type="text" name="last_name" id="last_name" autocomplete="family-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-80 shadow-sm sm:text-sm border-gray-300 rounded-md bg-gray-200" />
                </div>
                <div class="col-span-6 sm:col-span-3">
                  <label for="last_name" class="block text-sm font-medium text-gray-700">Middle Name</label>
                  <input type="text" name="Middle_name" id="Middle_name" autocomplete="Middle-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-80 shadow-sm sm:text-sm border-gray-300 rounded-md bg-gray-200" />
                </div>
  
               

                <div class="col-span-6 sm:col-span-4">
                  <label for="blood_pressure" class="block text-sm font-medium text-gray-700">Blood Pressure</label>
                  <input type="text" name="blood_presssure" id="blood_pressure" autocomplete="blood_pressure" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-25 shadow-sm sm:text-sm border-gray-300 rounded-md bg-gray-200" />
                </div>

                <div class="col-span-6 sm:col-span-4">
                  <label for="Height" class="block text-sm font-medium text-gray-700">Height</label>
                  <input type="text" name="Height" id="Height" autocomplete="Height" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-25 shadow-sm sm:text-sm border-gray-300 rounded-md bg-gray-200" />
                </div>

                <div class="col-span-6 sm:col-span-4">
                  <label for="Weight" class="text-sm font-medium text-gray-700">Weight</label>
                  <div class="flex">
                  <input type="text" name="Weight" id="Weight" autocomplete="Weight" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-15 shadow-sm sm:text-sm border-gray-300 rounded-md bg-gray-200 "  />
                  <select id="Course" name="Course" autocomplete="Course" class="mt-1 block wr-10 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-6">
                    <option>Student</option>
                    <option>Employee</option>
                   
                  </select>
                  </div>
                </div>

                <div class="col-span-6 sm:col-span-4">
                  <label for="Blood_sugar" class="block text-sm font-medium text-gray-700">Blood Sugar</label>
                  <input type="text" name="Blood_sugar" id="Blood_sugar" autocomplete="Blood_sugar" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-25 shadow-sm sm:text-sm border-gray-300 rounded-md bg-gray-200" />
                </div>


              </div>
            </div>
            
            <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button type="clear" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-400 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Clear
              </button>
              <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-400 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 m-2">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>

            
  );
}

function Accountss() {
  return (
    <div class="mt-10 sm:mt-0">
    <div class="md:grid md:grid-cols-3 md:gap-6">
      <div class="md:col-span-1">
        <div class="px-4 sm:px-0">
          <h3 class="text-lg font-medium leading-6 text-gray-900">Account Information</h3>
          <p class="mt-1 text-sm text-gray-600">
            Use a permanent address where you can receive mail.
          </p>
        </div>
      </div>
      <div class="mt-5 md:mt-0 md:col-span-2">
        <form action="#" method="POST">
          <div class="shadow overflow-hidden sm:rounded-md">
            <div class="px-4 py-5 bg-white sm:p-6">
              <div class="grid grid-cols-6 gap-6">

              <div class="col-span-6 sm:col-span-4">
                  <label for="account_type" class="block text-sm font-medium text-gray-700">Account Type</label>
                  <select id="account_type" name="account_type" autocomplete="account_type" class="mt-1 block w-80 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm w-80">
                    <option>Admin</option>
                    <option>Doctor</option>
                    <option>Nurse</option>
                    <option>Lab Assistance</option>
                   
                  </select>
                  </div>

              

               

             

                <div class="col-span-6 sm:col-span-3">
                  <label for="first_name" class="block text-sm font-medium text-gray-700">First name</label>
                  <input type="text" name="first_name" id="first_name" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-80 shadow-sm sm:text-sm border-gray-300 rounded-md bg-gray-200" />
                </div>
  
                <div class="col-span-6 sm:col-span-3">
                  <label for="last_name" class="block text-sm font-medium text-gray-700">Last name</label>
                  <input type="text" name="last_name" id="last_name" autocomplete="family-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-80 shadow-sm sm:text-sm border-gray-300 rounded-md bg-gray-200" />
                </div>
                <div class="col-span-6 sm:col-span-3">
                  <label for="last_name" class="block text-sm font-medium text-gray-700">Middle Name</label>
                  <input type="text" name="Middle_name" id="Middle_name" autocomplete="Middle-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-80 shadow-sm sm:text-sm border-gray-300 rounded-md bg-gray-200" />
                </div>
  
               

                <div class="col-span-6 sm:col-span-4">
                  <label for="username" class="block text-sm font-medium text-gray-700">Username</label>
                  <input type="username" name="username" id="blood_pressure" autocomplete="username" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-80 shadow-sm sm:text-sm border-gray-300 rounded-md bg-gray-200" />
                </div>

                <div class="col-span-6 sm:col-span-4">
                  <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                  <input type="password" name="password" id="password" autocomplete="password" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-80 shadow-sm sm:text-sm border-gray-300 rounded-md bg-gray-200" />
                </div>

                <div class="col-span-6 sm:col-span-4">
                  <label for="Weight" class="block text-sm font-medium text-gray-700">Weight</label>
                  <input type="text" name="Weight" id="Weight" autocomplete="Weight" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-25 shadow-sm sm:text-sm border-gray-300 rounded-md bg-gray-200" />
                </div>

                <div class="col-span-6 sm:col-span-4">
                  <label for="Blood_sugar" class="block text-sm font-medium text-gray-700">Blood Sugar</label>
                  <input type="text" name="Blood_sugar" id="Blood_sugar" autocomplete="Blood_sugar" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-25 shadow-sm sm:text-sm border-gray-300 rounded-md bg-gray-200" />
                </div>


              </div>
            </div>
            
            <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button type="clear" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-400 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Clear
              </button>
              <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-400 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 m-2">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>

            
  );
}



function Dashboard() {
  return (
    <div>
      <header>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-end">
          <h1 className="text-3xl font-bold leading-tight text-gray-900">
            Dashboard
          </h1>
          <nav className="flex ml-8">
            <NavLink
              to=""
              exact={true}
              activeClassName="text-gray-700 bg-gray-100"
              inactiveClassName="text-gray-500 hover:text-gray-700"
              className="ml-4 px-2 py-1 font-medium text-xs leading-5 rounded-md"
            >
              Overview
            </NavLink>
            <NavLink
              to="new-users"
              activeClassName="text-gray-700 bg-gray-100"
              inactiveClassName="text-gray-500 hover:text-gray-700"
              className="ml-4 px-2 py-1 font-medium text-xs leading-5 rounded-md"
            >
              New users
            </NavLink>
            <NavLink
              to="sales"
              activeClassName="text-gray-700 bg-gray-100"
              inactiveClassName="text-gray-500 hover:text-gray-700"
              className="ml-4 px-2 py-1 font-medium text-xs leading-5 rounded-md"
            >
              Sales
            </NavLink>
          </nav>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="px-4 py-8 sm:px-0">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
}

function Transactions() {
  return (
    <div>
      <header>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-end">
          <h1 className="text-3xl font-bold leading-tight text-gray-900">
            Transactions
          </h1>
          <nav className="flex ml-8">
            <NavLink
              to=""
              exact={true}
              activeClassName="text-gray-700 bg-gray-100"
              inactiveClassName="text-gray-500 hover:text-gray-700"
              className="ml-4 px-2 py-1 font-medium text-xs leading-5 rounded-md"
            >
              Overview
            
            </NavLink>
          </nav>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="px-4 py-8 sm:px-0">
            <Outlet />
          </div>
        </div>  
      </main>
    </div>
  );
}

function Records() {
  return (
    <div>
      <header>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-end">
          <h1 className="text-3xl font-bold leading-tight text-gray-900">
            Records
          </h1>
          <nav className="flex ml-8">
            <NavLink
              to=""
              exact={true}
              activeClassName="text-gray-700 bg-gray-100"
              inactiveClassName="text-gray-500 hover:text-gray-700"
              className="ml-4 px-2 py-1 font-medium text-xs leading-5 rounded-md"
            >
              Overview
            </NavLink>
            <NavLink
              to="students"
              activeClassName="text-gray-700 bg-gray-100"
              inactiveClassName="text-gray-500 hover:text-gray-700"
              className="ml-4 px-2 py-1 font-medium text-xs leading-5 rounded-md"
            >
              Students
            </NavLink>
            <NavLink
              to="employees"
              activeClassName="text-gray-700 bg-gray-100"
              inactiveClassName="text-gray-500 hover:text-gray-700"
              className="ml-4 px-2 py-1 font-medium text-xs leading-5 rounded-md"
            >
              Employees
            </NavLink>
            <NavLink
              to="patients"
              activeClassName="text-gray-700 bg-gray-100"
              inactiveClassName="text-gray-500 hover:text-gray-700"
              className="ml-4 px-2 py-1 font-medium text-xs leading-5 rounded-md"
            >
              Patients
            </NavLink>
          </nav>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="px-4 py-8 sm:px-0">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
}

function Inventory() {
  return (
    <div>
      <header>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-end">
          <h1 className="text-3xl font-bold leading-tight text-gray-900">
            Inventory
          </h1>
          <nav className="flex ml-8">
            <NavLink
              to=""
              exact={true}
              activeClassName="text-gray-700 bg-gray-100"
              inactiveClassName="text-gray-500 hover:text-gray-700"
              className="ml-4 px-2 py-1 font-medium text-xs leading-5 rounded-md"
            >
              Overview
            </NavLink>
            <NavLink
              to="stocks"
              activeClassName="text-gray-700 bg-gray-100"
              inactiveClassName="text-gray-500 hover:text-gray-700"
              className="ml-4 px-2 py-1 font-medium text-xs leading-5 rounded-md"
            >
              Stocks
            </NavLink>
            <NavLink
              to="medicines"
              activeClassName="text-gray-700 bg-gray-100"
              inactiveClassName="text-gray-500 hover:text-gray-700"
              className="ml-4 px-2 py-1 font-medium text-xs leading-5 rounded-md"
            >
              Medicines
            </NavLink>
          </nav>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="px-4 py-8 sm:px-0">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
}

function Settings() {
  return (
    <div>
      <header>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-end">
          <h1 className="text-3xl font-bold leading-tight text-gray-900">
            Settings
          </h1>
          <nav className="flex ml-8">
            <NavLink
              to=""
              exact={true}
              activeClassName="text-gray-700 bg-gray-100"
              inactiveClassName="text-gray-500 hover:text-gray-700"
              className="ml-4 px-2 py-1 font-medium text-xs leading-5 rounded-md"
            >
              Overview
            </NavLink>
            <NavLink
              to="accounts"
              activeClassName="text-gray-700 bg-gray-100"
              inactiveClassName="text-gray-500 hover:text-gray-700"
              className="ml-4 px-2 py-1 font-medium text-xs leading-5 rounded-md"
            >
               Accounts
            </NavLink>
            <NavLink
              to="departments"
              activeClassName="text-gray-700 bg-gray-100"
              inactiveClassName="text-gray-500 hover:text-gray-700"
              className="ml-4 px-2 py-1 font-medium text-xs leading-5 rounded-md"
            >
              Departments
            </NavLink>
            <NavLink
              to="courses"
              activeClassName="text-gray-700 bg-gray-100"
              inactiveClassName="text-gray-500 hover:text-gray-700"
              className="ml-4 px-2 py-1 font-medium text-xs leading-5 rounded-md"
            >
              Courses
            </NavLink>
            <NavLink
              to="units"
              activeClassName="text-gray-700 bg-gray-100"
              inactiveClassName="text-gray-500 hover:text-gray-700"
              className="ml-4 px-2 py-1 font-medium text-xs leading-5 rounded-md"
            >
              Units
            </NavLink>
            <NavLink
              to="accountlogs"
              activeClassName="text-gray-700 bg-gray-100"
              inactiveClassName="text-gray-500 hover:text-gray-700"
              className="ml-4 px-2 py-1 font-medium text-xs leading-5 rounded-md"
            >
              Account Logs
            </NavLink>
            <NavLink
              to="medicinelogs"
              activeClassName="text-gray-700 bg-gray-100"
              inactiveClassName="text-gray-500 hover:text-gray-700"
              className="ml-4 px-2 py-1 font-medium text-xs leading-5 rounded-md"
            >
              Medicine Logs
            </NavLink>
          </nav>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="px-4 py-8 sm:px-0">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
}

function Page({ title }) {
  return (
    <div>
      <header>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-end">
          <h1 className="text-3xl font-bold leading-tight text-gray-900">
            {title}
          </h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="px-4 py-8 sm:px-0">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
}
