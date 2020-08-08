import React, { lazy, Suspense } from "react"
import { Redirect } from "react-router-dom"
import HomeLayout from "layouts/HomeLayout"
import BlankLayout from "layouts/BlankLayout"

const SuspenseComponent = Component => props => {
  return (
    <Suspense fallback={null}>
      <Component {...props}></Component>
    </Suspense>
  )
}

const RecommendComponent = lazy(() => import("application/Recommend"));
const SingersComponent = lazy(() => import("application/Singers"));
const RankComponent = lazy(() => import("application/Rank"));
const AlbumComponent = lazy(() => import("application/Album"))
const SingerComponent = lazy(() => import("application/Singer"))
// 导入路由
export default [
  {
    component: BlankLayout,
    routes: [
      {
        path: "/",
        component: HomeLayout,
        routes: [
          {
            path: "/",
            exact: true,
            render: () => <Redirect to={"/recommend"} />

          },
          {
            path: '/recommend',
            component: SuspenseComponent(RecommendComponent),
            routes: [
              {
                path: "/recommend/:id",
                exact : true,
                component: SuspenseComponent(AlbumComponent)
              }
            ]
          },
          {
            path: "/singers",
            component: SuspenseComponent(SingersComponent),
            routes : [
              {
                path : "/singers/:id",
                exact : true,
                component : SuspenseComponent(SingerComponent)
              }
            ]
          },
          {
            path: "/rank",
            component: SuspenseComponent(RankComponent)
          }
        ]
      },
    ]
  }
]