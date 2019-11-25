import React, { useEffect, useRef, useState } from 'react';
import Intro from '../Intro/Intro';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import useScroll from './UseScroll';

const scrollToRef = ref => {
  const scrolleySpot =
    ref.current.getBoundingClientRect().top + window.pageYOffset + -40;
  window.scrollTo({ top: scrolleySpot, behavior: 'smooth' });
};
const topOfWhat = ref => {
  return ref.current.getBoundingClientRect().top + window.pageYOffset;
};
const getBottomest = arr => {
  return arr.reduce((prev, curr) => {
    return prev.current.getBoundingClientRect().top >
      curr.current.getBoundingClientRect().top
      ? prev
      : curr;
  });
};
const getToppest = arr => {
  return arr.reduce((prev, curr) => {
    return prev.current.getBoundingClientRect().top <
      curr.current.getBoundingClientRect().top
      ? prev
      : curr;
  });
};

const MainChannel = props => {
  const [projectId, setProjectId] = useState(null);
  const [path, setPath] = useState(null);
  const [nextBottom, setNextBottom] = useState(null);
  const intro = useRef(null);
  const projects = useRef(null);
  const contact = useRef(null);
  const coords = useScroll();

  useEffect(() => {
    if (props.match && props.match.params.id) {
      setProjectId(props.match.params.id);
    }
    if (props.match && props.match.path) {
      setPath(props.match.path);
    }
  }, [props]);

  useEffect(() => {
    const viewPortBottom = coords.y + window.innerHeight;
    const viewPortTop = coords.y;

    const bottomest = getBottomest([intro, projects, contact]);
    const toppest = getToppest([intro, projects, contact]);

    setNextBottom(topOfWhat(bottomest));

    if (Math.abs(viewPortTop - topOfWhat(projects)) < 200) {
      props.navRefs.projects.current.style.color = 'pink';
      props.navRefs.contact.current.style.color = 'inherit';
      props.navRefs.home.current.style.color = 'inherit';
    }
    if (Math.abs(viewPortTop - topOfWhat(contact)) < 200) {
      props.navRefs.contact.current.style.color = 'pink';
      props.navRefs.projects.current.style.color = 'inherit';
      props.navRefs.home.current.style.color = 'inherit';
    }
    if (Math.abs(viewPortTop - topOfWhat(intro)) < 200) {
      props.navRefs.home.current.style.color = 'pink';
      props.navRefs.contact.current.style.color = 'inherit';
      props.navRefs.projects.current.style.color = 'inherit';
    }

    if (nextBottom < viewPortBottom) {
      bottomest.current.parentNode.appendChild(toppest.current);
    }
  }, [coords]);

  useEffect(() => {
    setTimeout(function() {
      switch (path) {
        case '/projects':
          scrollToRef(projects);
          break;
        case '/projects/:id':
          scrollToRef(projects);
          break;
        case '/contact':
          scrollToRef(contact);
          break;
        default:
          scrollToRef(intro);
          break;
      }
    }, 50);
  }, [path]);

  return (
    <>
      <div ref={intro}>
        <Intro {...props} />
      </div>
      <div ref={projects}>
        <Projects projectId={projectId} {...props}></Projects>
      </div>
      <div ref={contact}>
        <Contact ref={contact}></Contact>
      </div>
    </>
  );
};

export default MainChannel;
