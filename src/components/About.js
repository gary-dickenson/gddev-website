import '../styles/About.scss'

const ComingSoonComponent = React.lazy(() => import('./ComingSoon'))

export default function About () {
  return <ComingSoonComponent/>
}
