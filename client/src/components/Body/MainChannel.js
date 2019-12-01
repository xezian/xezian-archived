import React, { useEffect, useRef, useState } from 'react';
import { withRouter } from 'react-router-dom';
import Intro from '../Intro/Intro';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import useScroll from './UseScroll';

const topOfWhat = ref => {
  return ref.current.getBoundingClientRect().top + window.pageYOffset - 40;
};

function getDocHeight() {
  var D = document;
  return Math.max(
    D.body.scrollHeight,
    D.documentElement.scrollHeight,
    D.body.offsetHeight,
    D.documentElement.offsetHeight,
    D.body.clientHeight,
    D.documentElement.clientHeight
  );
}

const makeOrdersObj = (props, introRef, projectsRef, contactRef, projectId) => {
  return {
    intro: (
      <>
        <div ref={contactRef}>
          <Contact {...props}></Contact>
        </div>
        <div ref={introRef}>
          <Intro {...props}></Intro>
        </div>
        <div ref={projectsRef}>
          <Projects projectId={projectId} {...props}></Projects>
        </div>
      </>
    ),
    projects: (
      <>
        <div ref={introRef}>
          <Intro {...props}></Intro>
        </div>
        <div ref={projectsRef}>
          <Projects projectId={projectId} {...props}></Projects>
        </div>
        <div ref={contactRef}>
          <Contact {...props}></Contact>
        </div>
      </>
    ),
    contact: (
      <>
        <div ref={projectsRef}>
          <Projects projectId={projectId} {...props}></Projects>
        </div>
        <div ref={contactRef}>
          <Contact {...props}></Contact>
        </div>
        <div ref={introRef}>
          <Intro {...props}></Intro>
        </div>
      </>
    )
  };
};

const locateAndAttainTarget = (targRef, targNav, nonNav1, nonNav2) => {
  window.scrollTo({
    top: topOfWhat(targRef),
    behavior: 'auto'
  });
  targNav.current.style.color = 'pink';
  nonNav1.current.style.color = 'inherit';
  nonNav2.current.style.color = 'inherit';
};

const MainChannel = withRouter(props => {
  const { match, navRefs, history } = props;
  const introRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const [projectId, setProjectId] = useState(
    match && match.params.id ? match.params.id : null
  );
  const [path, setPath] = useState(
    match && match.path && match.path ? match.path : null
  );
  const [introTop, setIntroTop] = useState(null);
  const [projectsTop, setProjectsTop] = useState(null);
  const [contactTop, setContactTop] = useState(null);
  const coords = useScroll();
  const [orders, setOrders] = useState(
    makeOrdersObj(props, introRef, projectsRef, contactRef, projectId)
  );
  const [projects, setProjects] = useState(orders.projects);
  const [contact, setContact] = useState(orders.contact);
  const [intro, setIntro] = useState(orders.intro);
  const [wall, setWall] = useState(false);
  const [whoSetWall, setWhoSetWall] = useState(introRef);
  const [components, setComponents] = useState(intro);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (match && match.path) {
      setPath(match.path);
    }
    if (match && match.params.id) {
      setProjectId(match.params.id);
    }
  }, [match]);

  useEffect(() => {
    setOrders(
      makeOrdersObj(props, introRef, projectsRef, contactRef, projectId)
    );
  }, [path, projectId, props]);

  useEffect(() => {
    setProjects(orders.projects);
    setIntro(orders.intro);
    setContact(orders.contact);
    setIntroTop(topOfWhat(introRef));
    setProjectsTop(topOfWhat(projectsRef));
    setContactTop(topOfWhat(contactRef));
  }, [orders.projects, orders.intro, orders.contact]);

  useEffect(() => {
    switch (path) {
      case '/projects':
        setWall(true);
        setWhoSetWall(projectsRef);
        setComponents(projects);
        locateAndAttainTarget(
          projectsRef,
          navRefs.projects,
          navRefs.contact,
          navRefs.home
        );
        break;
      case '/projects/:id':
        setWall(true);
        setWhoSetWall(projectsRef);
        setComponents(projects);
        locateAndAttainTarget(
          projectsRef,
          navRefs.projects,
          navRefs.contact,
          navRefs.home
        );
        break;
      case '/contact':
        setWall(true);
        setWhoSetWall(contactRef);
        setComponents(contact);
        locateAndAttainTarget(
          contactRef,
          navRefs.contact,
          navRefs.projects,
          navRefs.home
        );
        break;
      case '/home':
        setWall(true);
        setWhoSetWall(introRef);
        setComponents(intro);
        locateAndAttainTarget(
          introRef,
          navRefs.home,
          navRefs.projects,
          navRefs.contact
        );
        break;
      default:
        break;
    }
  }, [path, navRefs, projects, contact, intro]);

  useEffect(() => {
    const vpTop = coords.y;
    const vpBot = coords.y + window.innerHeight + 30;
    const docBot = getDocHeight();
    if (Math.abs(topOfWhat(whoSetWall) - vpTop) < 100) {
      setWall(false);
    }
    if (!wall) {
      if (vpBot >= docBot) {
        if (introTop > contactTop && introTop > projectsTop) {
          history.push('/home');
        } else if (projectsTop > introTop && projectsTop > contactTop) {
          history.push('/projects');
        } else if (contactTop > projectsTop && contactTop > introTop) {
          history.push('/contact');
        }
      } else if (vpTop <= 0) {
        if (introTop < contactTop && introTop < projectsTop) {
          history.push('/home');
        } else if (projectsTop < introTop && projectsTop < contactTop) {
          history.push('/projects');
        } else if (contactTop < projectsTop && contactTop < introTop) {
          history.push('/contact');
        }
      }
    }
  }, [coords, introTop, projectsTop, contactTop, wall, whoSetWall, history]);

  return <>{components}</>;
});

export default MainChannel;
