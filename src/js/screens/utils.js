import { announcePageLoaded } from 'grommet/utils/Announcer';

const DEFAULT_TITLE = 'Assess Author Tool Prototype';

export function pageLoaded(title) {
  if (document) {
    if (title && typeof title === 'string') {
      title = `${title} | ${DEFAULT_TITLE}`;
    } else {
      title = DEFAULT_TITLE;
    }
    announcePageLoaded(title);
    document.title = title;
  }
}

export default { pageLoaded };
