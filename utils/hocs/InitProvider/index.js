
import { memo, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'

import {
  setAccessToken,
  setCurrentUser
} from 'actions/auth'
import { getUsers } from 'actions/users'
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

  const { accessToken } = useSelector(state => state.auth);

  useEffect(() => {
    const accessToken = isServer() ? '' : localStorage.accessToken;
    const currentUser = isServer() ? null : localStorage.currentUser;

    if (!!accessToken) {
      dispatch(setAccessToken(accessToken))
    }

    if (!!currentUser) {
      dispatch(setCurrentUser(JSON.parse(currentUser)))
    }
  }, [dispatch])

  useEffect(() => {
    const accessToken = isServer() ? '' : localStorage.accessToken;

    if (!!accessToken) {
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

  useEffect(() => {
    if (!!accessToken) {
      dispatch(getUsers())
    }
  }, [accessToken, dispatch])

  return <div />
};

export default memo(InitProvider);