import '../styles/Home.scss'

const SkillsComponent = React.lazy(() => import('./Skills'))

export default function Home () {
  return (<div className="home-container">
      <SkillsComponent/>
    </div>)
}
