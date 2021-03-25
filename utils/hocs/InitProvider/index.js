
import { memo, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'

import * as authAPI from 'services/api-auth'
import {
  setIsAuthenticated,
  setCurrentUser,
  setUserToken
} from 'actions/auth'
import getFanbandsStatistics from 'actions/getFanbandsStatistics'
import { isServer } from 'utils/helpers/utility'
import scrollToTop from 'utils/helpers/scrollToTop'
import {
  AUTH_ROUTES,
  PAGE_ROUTES
} from 'utils/constants/routes'
import LINKS from 'utils/constants/links'

const InitProvider = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = isServer() ? '' : localStorage.isAuthenticated;
    const currentUser = isServer() ? null : localStorage.currentUser;

    dispatch(setIsAuthenticated(isAuthenticated === 'true'))
    if (!!currentUser) {
      dispatch(setCurrentUser(JSON.parse(currentUser)))
    }

    if (isAuthenticated === 'true') {
      dispatch(getFanbandsStatistics())
    }
    checkAuthenticate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const checkAuthenticate = async () => {
    try {
      const user = await authAPI.isAuthenticated();
      dispatch(setUserToken({
        isAuthenticated: true,
        user,
      }))
    } catch (error) {
      console.log(error)
      dispatch(setUserToken({
        isAuthenticated: false,
        user: {},
      }))
    }
  }

  useEffect(() => {
    const isAuthenticated = isServer() ? '' : localStorage.isAuthenticated;

    if (isAuthenticated === 'true') {
      if (AUTH_ROUTES.includes(router.pathname)) {
        router.push(LINKS.HOME.HREF)
      }
    } else {
      if (PAGE_ROUTES.includes(router.pathname)) {
        router.push(LINKS.SIGN_IN.HREF)
      }
    }
    scrollToTop()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router])

  return <div />
};

export default memo(InitProvider);