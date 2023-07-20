import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
  cilUser,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    // badge: {
    //   color: 'info',
    //   text: 'NEW',
    // },
  },
 
  
  {
    component: CNavGroup,
    name: 'Patient Report',
    // to: '/base',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Add New Patient',
        to: '/add-patient',
      },
      {
        component: CNavItem,
        name: 'All Patients',
        to: '/all-patients',
      },
    ],
  },

    {
      component: CNavGroup,
      name: 'Registered Users',
      // to: '/base',
      icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
      items: [
        {
          component: CNavItem,
          name: 'All Users',
          to: '/all-users',
        },
        // {
        //   component: CNavItem,
        //   name: 'All Patients',
        //   to: '/all-patients',
        // },
      ],
    },
    {component:CNavItem,
      name:'Send Report',
      to: '/SendPatientReport'
      },
  
  // {component:CNavItem,
  //   name:'Send Report',
  //       icon: <i class="cis-envelope-closed"></i>
  //   to: '/campaign'
  //   },


 
]

export default _nav
