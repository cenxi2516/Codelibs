// @ts-nocheck
enum EventType {
  CHANGE = 'fullscreenchange',
  ERROR = 'fullscreenerror'
}

const key = {
  fullscreenEnabled: 0,
  fullscreenElement: 1,
  requestFullscreen: 2,
  exitFullscreen: 3,
  fullscreenchange: 4,
  fullscreenerror: 5,
  fullscreen: 6
} as const

const webkit = [
  'webkitFullscreenEnabled',
  'webkitFullscreenElement',
  'webkitRequestFullscreen',
  'webkitExitFullscreen',
  'webkitfullscreenchange',
  'webkitfullscreenerror',
  '-webkit-full-screen'
] as const

const moz = [
  'mozFullScreenEnabled',
  'mozFullScreenElement',
  'mozRequestFullScreen',
  'mozCancelFullScreen',
  'mozfullscreenchange',
  'mozfullscreenerror',
  '-moz-full-screen'
] as const

const ms = [
  'msFullscreenEnabled',
  'msFullscreenElement',
  'msRequestFullscreen',
  'msExitFullscreen',
  'MSFullscreenChange',
  'MSFullscreenError',
  '-ms-fullscreen'
] as const

const document =
  typeof window !== 'undefined' && typeof window.document !== 'undefined' ? window.document : {}

const vendor =
  ('fullscreenEnabled' in document && Object.keys(key)) || // standard
  (webkit[0] in document && webkit) || // webkit prefix
  (moz[0] in document && moz) || // moz prefix
  (ms[0] in document && ms) || // ms prefix
  [] // not support

export const requestFullscreen = (element) => element[vendor[key.requestFullscreen]]()
export const exitFullscreen = () => document[vendor[key.exitFullscreen]]()
export const addEventListener = (type: EventType, handler, options) =>
  document.addEventListener(vendor[key[type]], handler, options)
export const removeEventListener = (type: EventType, handler, options) =>
  document.removeEventListener(vendor[key[type]], handler, options)

// prettier-ignore
export default {
  get fullscreenPseudoClass() {
    return `:${vendor[key.fullscreen]}`
  },
  get fullscreenEnabled() {
    return Boolean(document[vendor[key.fullscreenEnabled]])
  },
  get fullscreenElement() {
    return document[vendor[key.fullscreenElement]]
  },
  get onfullscreenchange() {
    return document[`on${vendor[key.fullscreenchange]}`.toLowerCase()]
  },
  set onfullscreenchange(handler) {
    return (document[`on${vendor[key.fullscreenchange]}`.toLowerCase()] = handler)
  },
  get onfullscreenerror() {
    return document[`on${vendor[key.fullscreenerror]}`.toLowerCase()]
  },
  set onfullscreenerror(handler) {
    return (document[`on${vendor[key.fullscreenerror]}`.toLowerCase()] = handler)
  }
} as const
