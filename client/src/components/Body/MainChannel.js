import React, { useEffect, useRef, useState } from 'react';
import { withRouter } from 'react-router-dom';
import Intro from '../Intro/Intro';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import useScroll from './UseScroll';

const topOfWhat = ref => {
  return ref.current.getBoundingClientRect().top + window.pageYOffset;
};

const MainChannel = withRouter(props => {
  const introRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const [projectId, setProjectId] = useState(
    props.match && props.match.params.id ? props.match.params.id : null
  );
  const [path, setPath] = useState(
    props.match && props.match.path && props.match.path
      ? props.match.path
      : null
  );
  const orders = {
    intro: (
      <>
        <div ref={introRef}>
          <Intro {...props}></Intro>
        </div>
        <div ref={projectsRef}>
          <Projects projectId={projectId} {...props}></Projects>
        </div>
        <div ref={contactRef}>
          <Contact ref={contactRef}></Contact>
        </div>
      </>
    ),
    projects: (
      <>
        <div ref={projectsRef}>
          <Projects projectId={projectId} {...props}></Projects>
        </div>
        <div ref={contactRef}>
          <Contact ref={contactRef}></Contact>
        </div>
        <div ref={introRef}>
          <Intro {...props}></Intro>
        </div>
      </>
    ),
    contact: (
      <>
        <div ref={contactRef}>
          <Contact ref={contactRef}></Contact>
        </div>
        <div ref={introRef}>
          <Intro {...props}></Intro>
        </div>
        <div ref={projectsRef}>
          <Projects projectId={projectId} {...props}></Projects>
        </div>
      </>
    )
  };
  const [introTop, setIntroTop] = useState(null);
  const [projectsTop, setProjectsTop] = useState(null);
  const [contactTop, setContactTop] = useState(null);
  const [components, setComponents] = useState(orders.intro);
  const coords = useScroll();

  useEffect(() => {
    if (props.match && props.match.path) {
      setPath(props.match.path);
    }
    if (props.match && props.match.params.id) {
      setProjectId(props.match.params.id);
    }
  }, [props]);

  useEffect(() => {
    switch (path) {
      case '/projects':
        setComponents(orders.projects);
        window.scrollTo({
          top: document.body.getBoundingClientRect().top,
          behavior: 'auto'
        });
        props.navRefs.projects.current.style.color = 'pink';
        props.navRefs.contact.current.style.color = 'inherit';
        props.navRefs.home.current.style.color = 'inherit';
        break;
      case '/projects/:id':
        setComponents(orders.projects);
        window.scrollTo({
          top: document.body.getBoundingClientRect().top,
          behavior: 'auto'
        });
        props.navRefs.projects.current.style.color = 'pink';
        props.navRefs.contact.current.style.color = 'inherit';
        props.navRefs.home.current.style.color = 'inherit';
        break;
      case '/contact':
        setComponents(orders.contact);
        window.scrollTo({
          top: document.body.getBoundingClientRect().top,
          behavior: 'auto'
        });
        props.navRefs.contact.current.style.color = 'pink';
        props.navRefs.projects.current.style.color = 'inherit';
        props.navRefs.home.current.style.color = 'inherit';
        break;
      default:
        setComponents(orders.intro);
        window.scrollTo({
          top: document.body.getBoundingClientRect().top,
          behavior: 'auto'
        });
        props.navRefs.home.current.style.color = 'pink';
        props.navRefs.contact.current.style.color = 'inherit';
        props.navRefs.projects.current.style.color = 'inherit';
        break;
    }
  }, [path]);

  useEffect(() => {
    const viewPortTop = coords.y;
    setIntroTop(topOfWhat(introRef));
    setProjectsTop(topOfWhat(projectsRef));
    setContactTop(topOfWhat(contactRef));
    if (viewPortTop > 1000) {
      if (Math.abs(viewPortTop - introTop) < 200) {
        props.history.push('/home');
      }
      if (Math.abs(viewPortTop - projectsTop) < 200) {
        props.history.push('/projects');
      }
      if (Math.abs(viewPortTop - contactTop) < 200) {
        props.history.push('/contact');
      }
    }
  }, [coords, components]);

  return <>{components}</>;
});

export default MainChannel;
