  export const getOS = (): string => {
    const userAgent = window.navigator.userAgent;
    let os = 'default';

    if (userAgent.includes('Win')) {
      os = 'win';
    } else if (userAgent.includes('Mac')) {
      os = 'macos';
    } else if (userAgent.includes('Linux')) {
      os = 'linux';
    } else if (userAgent.includes('Android')) {
      os = 'android';
    } else if (userAgent.includes('iOS') || userAgent.includes('iPad') || userAgent.includes('iPhone')) {
      os = 'ios';
    }

    return os;
  }