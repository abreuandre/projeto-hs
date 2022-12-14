// ** React Imports
import { Fragment, lazy } from 'react'
import { Navigate } from 'react-router-dom'
// ** Layouts
import BlankLayout from '@layouts/BlankLayout'
import VerticalLayout from '@src/layouts/VerticalLayout'
import HorizontalLayout from '@src/layouts/HorizontalLayout'
import LayoutWrapper from '@src/@core/layouts/components/layout-wrapper'

// ** Route Components
import PublicRoute from '@components/routes/PublicRoute'

// ** Utils
import { isObjEmpty } from '@utils'
//import AusenciaFunc from '../../views/AusenciaFunc'

const getLayout = {
  blank: <BlankLayout />,
  vertical: <VerticalLayout />,
  horizontal: <HorizontalLayout />
}

// ** Document title
const TemplateTitle = 'Apps - HSTERN'

// ** Default Route
const DefaultRoute = '/home'

const Home = lazy(() => import('../../views/Home'))
const Login = lazy(() => import('../../views/Login'))
const Error = lazy(() => import('../../views/Error'))

const StarTimeSheet = lazy(() => import('../../views/StarTimeSheet'))
const AusenciaFuncionario = lazy(() => import('../../APL/STAR/Ausencia/AusenciaFunc'))
const LGPD = lazy(() => import('../../APL/LGPD/LGPD'))
const AprovacoesPendentes = lazy(() => import('../../APL/APROV/AprovacoesPendentes'))
const Desempenho = lazy(() => import('../../APL/STAR/Desempenho/Desempenho'))

// ** Merge Routes
const Routes = [
  {
    path: '/AusenciaFunc',
    element: <AusenciaFuncionario />
  },
  {
    path: '/StarTimeSheet',
    element: <StarTimeSheet />
  },

  {
    path: '/Star/Desempenho',
    element: <Desempenho />
  },
  {
    path: '/LGPD',
    element: <LGPD />
  },
  {
    path: '/AprovacoesPendentes',
    element: <AprovacoesPendentes />
  },
  {
    path: '/',
    index: true,
    element: <Navigate replace to={DefaultRoute} />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />,
    meta: {
      layout: 'blank'
    }
  },
  {
    path: '/error',
    element: <Error />,
    meta: {
      layout: 'blank'
    }
  }
]

const getRouteMeta = route => {
  if (isObjEmpty(route.element.props)) {
    if (route.meta) {
      return { routeMeta: route.meta }
    } else {
      return {}
    }
  }
}

// ** Return Filtered Array of Routes & Paths
const MergeLayoutRoutes = (layout, defaultLayout) => {
  const LayoutRoutes = []

  if (Routes) {
    Routes.filter(route => {
      let isBlank = false
      // ** Checks if Route layout or Default layout matches current layout
      if (
        (route.meta && route.meta.layout && route.meta.layout === layout) ||
        ((route.meta === undefined || route.meta.layout === undefined) && defaultLayout === layout)
      ) {
        const RouteTag = PublicRoute

        // ** Check for public or private route
        if (route.meta) {
          route.meta.layout === 'blank' ? (isBlank = true) : (isBlank = false)
        }
        if (route.element) {
          const Wrapper =
            // eslint-disable-next-line multiline-ternary
            isObjEmpty(route.element.props) && isBlank === false
              ? // eslint-disable-next-line multiline-ternary
                LayoutWrapper
              : Fragment

          route.element = (
            <Wrapper {...(isBlank === false ? getRouteMeta(route) : {})}>
              <RouteTag route={route}>{route.element}</RouteTag>
            </Wrapper>
          )
        }

        // Push route to LayoutRoutes
        LayoutRoutes.push(route)
      }
      return LayoutRoutes
    })
  }
  return LayoutRoutes
}

const getRoutes = layout => {
  const defaultLayout = layout || 'vertical'
  const layouts = ['vertical', 'horizontal', 'blank']

  const AllRoutes = []

  layouts.forEach(layoutItem => {
    const LayoutRoutes = MergeLayoutRoutes(layoutItem, defaultLayout)

    AllRoutes.push({
      path: '/',
      element: getLayout[layoutItem] || getLayout[defaultLayout],
      children: LayoutRoutes
    })
  })
  return AllRoutes
}

export { DefaultRoute, TemplateTitle, Routes, getRoutes }
