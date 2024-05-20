import React from "react";
import { Redirect } from "react-router-dom";
// User profile
// import Home from "../pages/frontend/index";
// Authentication related pages
import Login from "../pages/admin/Authentication/Login";
import Logout from "../pages/admin/Authentication/Logout";
import ForgetPwd from "../pages/admin/Authentication/ForgetPassword";
import AccessDenied from "../pages/admin/Authentication/AccessDenied";
import ChangePassword from "../pages/admin/Authentication/ChangePassword";
import ResetPassword from "../pages/admin/Authentication/ResetPassword";

// Dashboard
import RecruitmentDashboard from "../pages/admin/Dashboard/Dashboard";
import CreateUser from "../pages/admin/Users/createUser";
import EditUser from "../pages/admin/Users/editUser";
import UserList from "../pages/admin/Users/userList";
import RoleList from "../pages/admin/settings/role-management/roleList";
/**-role-management */
import RoleManagement from "../pages/admin/settings/role-management/RoleManagement";
import AddRoleManagement from "../pages/admin/settings/role-management/AddRoleManagement";
import EditRoleManagement from "../pages/admin/settings/role-management/EditRoleManagement";
// /**-manage-user */
/**-brand-management */
import BrandManagement from "../pages/admin/Brand/brandManagement";
import AddBrandManagement from "../pages/admin/Brand/createBrand";
import EditBrandManagement from "../pages/admin/Brand/editBrand";
/**-model-management */
import ModelManagement from "../pages/admin/Model/modelManagement";
import AddModelManagement from "../pages/admin/Model/createModel";
import EditModelManagement from "../pages/admin/Model/editModel";
/**-varient-management */
import VarientManagement from "../pages/admin/Varient/varientManagement";
import AddVarientManagement from "../pages/admin/Varient/createVarient";
import EditVarientManagement from "../pages/admin/Varient/editVarient";

/**-car-management */
import CarManagement from "../pages/admin/Car/carManagement";
import AddCarManagement from "../pages/admin/Car/createCar";
import EditCarManagement from "../pages/admin/Car/editCar";


const authProtectedRoutes = [
  { path: "/", exact: true, component: () => <Redirect to="dashboard" /> },
  { path: "/dashboard", component: RecruitmentDashboard },
  //user
  { path: "/create-user", component: CreateUser },
  { path: "/edit-user/:userId", component: EditUser },
  { path: "/user-list", component: UserList },
  { path: "/change-password", component: ChangePassword },
  { path: "/role-list", component: RoleList },

    /**-role-management**/
    { path: "/role-management", component: RoleManagement },
    { path: "/edit-role-management/:role_id", component: EditRoleManagement },
    { path: "/add-role-management", component: AddRoleManagement },
    /**-brand-management**/
    { path: "/brand-management", component: BrandManagement },
    { path: "/edit-brand-management/:brandId", component: EditBrandManagement },
    { path: "/add-brand-management", component: AddBrandManagement },

    /**-model-management**/
    { path: "/model-management", component: ModelManagement },
    { path: "/edit-model-management/:modelId", component: EditModelManagement },
    { path: "/add-model-management", component: AddModelManagement },
    /**-varient-management**/
    { path: "/varient-management", component: VarientManagement },
    { path: "/edit-varient-management/:varientId", component: EditVarientManagement },
    { path: "/add-varient-management", component: AddVarientManagement },
    
    /**-car-management**/
    { path: "/car-management", component: CarManagement },
    { path: "/edit-car-management/:carId", component: EditCarManagement },
    { path: "/add-car-management", component: AddCarManagement },


];


const publicRoutes = [
  { path: "/logout", component: Logout },
  { path: "/login", component: Login },
  { path: "/forgot-password", component: ForgetPwd },
  { path: "/access-denied", component: AccessDenied },
  { path: "/reset-password", component: ResetPassword },


  
];

export {
  authProtectedRoutes,
  publicRoutes,
};
