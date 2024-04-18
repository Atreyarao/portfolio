/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["reactPlayerFilePlayer"],{

/***/ "(app-pages-browser)/./node_modules/react-player/lib/players/FilePlayer.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-player/lib/players/FilePlayer.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("var __create = Object.create;\nvar __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __getProtoOf = Object.getPrototypeOf;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;\nvar __export = (target, all) => {\n  for (var name in all)\n    __defProp(target, name, { get: all[name], enumerable: true });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === \"object\" || typeof from === \"function\") {\n    for (let key of __getOwnPropNames(from))\n      if (!__hasOwnProp.call(to, key) && key !== except)\n        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n  }\n  return to;\n};\nvar __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(\n  // If the importer is in node compatibility mode or this is not an ESM\n  // file that has been converted to a CommonJS file using a Babel-\n  // compatible transform (i.e. \"__esModule\" has not been set), then set\n  // \"default\" to the CommonJS \"module.exports\" for node compatibility.\n  isNodeMode || !mod || !mod.__esModule ? __defProp(target, \"default\", { value: mod, enumerable: true }) : target,\n  mod\n));\nvar __toCommonJS = (mod) => __copyProps(__defProp({}, \"__esModule\", { value: true }), mod);\nvar __publicField = (obj, key, value) => {\n  __defNormalProp(obj, typeof key !== \"symbol\" ? key + \"\" : key, value);\n  return value;\n};\nvar FilePlayer_exports = {};\n__export(FilePlayer_exports, {\n  default: () => FilePlayer\n});\nmodule.exports = __toCommonJS(FilePlayer_exports);\nvar import_react = __toESM(__webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\"));\nvar import_utils = __webpack_require__(/*! ../utils */ \"(app-pages-browser)/./node_modules/react-player/lib/utils.js\");\nvar import_patterns = __webpack_require__(/*! ../patterns */ \"(app-pages-browser)/./node_modules/react-player/lib/patterns.js\");\nconst HAS_NAVIGATOR = typeof navigator !== \"undefined\";\nconst IS_IPAD_PRO = HAS_NAVIGATOR && navigator.platform === \"MacIntel\" && navigator.maxTouchPoints > 1;\nconst IS_IOS = HAS_NAVIGATOR && (/iPad|iPhone|iPod/.test(navigator.userAgent) || IS_IPAD_PRO) && !window.MSStream;\nconst IS_SAFARI = HAS_NAVIGATOR && /^((?!chrome|android).)*safari/i.test(navigator.userAgent) && !window.MSStream;\nconst HLS_SDK_URL = \"https://cdn.jsdelivr.net/npm/hls.js@VERSION/dist/hls.min.js\";\nconst HLS_GLOBAL = \"Hls\";\nconst DASH_SDK_URL = \"https://cdnjs.cloudflare.com/ajax/libs/dashjs/VERSION/dash.all.min.js\";\nconst DASH_GLOBAL = \"dashjs\";\nconst FLV_SDK_URL = \"https://cdn.jsdelivr.net/npm/flv.js@VERSION/dist/flv.min.js\";\nconst FLV_GLOBAL = \"flvjs\";\nconst MATCH_DROPBOX_URL = /www\\.dropbox\\.com\\/.+/;\nconst MATCH_CLOUDFLARE_STREAM = /https:\\/\\/watch\\.cloudflarestream\\.com\\/([a-z0-9]+)/;\nconst REPLACE_CLOUDFLARE_STREAM = \"https://videodelivery.net/{id}/manifest/video.m3u8\";\nclass FilePlayer extends import_react.Component {\n  constructor() {\n    super(...arguments);\n    // Proxy methods to prevent listener leaks\n    __publicField(this, \"onReady\", (...args) => this.props.onReady(...args));\n    __publicField(this, \"onPlay\", (...args) => this.props.onPlay(...args));\n    __publicField(this, \"onBuffer\", (...args) => this.props.onBuffer(...args));\n    __publicField(this, \"onBufferEnd\", (...args) => this.props.onBufferEnd(...args));\n    __publicField(this, \"onPause\", (...args) => this.props.onPause(...args));\n    __publicField(this, \"onEnded\", (...args) => this.props.onEnded(...args));\n    __publicField(this, \"onError\", (...args) => this.props.onError(...args));\n    __publicField(this, \"onPlayBackRateChange\", (event) => this.props.onPlaybackRateChange(event.target.playbackRate));\n    __publicField(this, \"onEnablePIP\", (...args) => this.props.onEnablePIP(...args));\n    __publicField(this, \"onDisablePIP\", (e) => {\n      const { onDisablePIP, playing } = this.props;\n      onDisablePIP(e);\n      if (playing) {\n        this.play();\n      }\n    });\n    __publicField(this, \"onPresentationModeChange\", (e) => {\n      if (this.player && (0, import_utils.supportsWebKitPresentationMode)(this.player)) {\n        const { webkitPresentationMode } = this.player;\n        if (webkitPresentationMode === \"picture-in-picture\") {\n          this.onEnablePIP(e);\n        } else if (webkitPresentationMode === \"inline\") {\n          this.onDisablePIP(e);\n        }\n      }\n    });\n    __publicField(this, \"onSeek\", (e) => {\n      this.props.onSeek(e.target.currentTime);\n    });\n    __publicField(this, \"mute\", () => {\n      this.player.muted = true;\n    });\n    __publicField(this, \"unmute\", () => {\n      this.player.muted = false;\n    });\n    __publicField(this, \"renderSourceElement\", (source, index) => {\n      if (typeof source === \"string\") {\n        return /* @__PURE__ */ import_react.default.createElement(\"source\", { key: index, src: source });\n      }\n      return /* @__PURE__ */ import_react.default.createElement(\"source\", { key: index, ...source });\n    });\n    __publicField(this, \"renderTrack\", (track, index) => {\n      return /* @__PURE__ */ import_react.default.createElement(\"track\", { key: index, ...track });\n    });\n    __publicField(this, \"ref\", (player) => {\n      if (this.player) {\n        this.prevPlayer = this.player;\n      }\n      this.player = player;\n    });\n  }\n  componentDidMount() {\n    this.props.onMount && this.props.onMount(this);\n    this.addListeners(this.player);\n    const src = this.getSource(this.props.url);\n    if (src) {\n      this.player.src = src;\n    }\n    if (IS_IOS || this.props.config.forceDisableHls) {\n      this.player.load();\n    }\n  }\n  componentDidUpdate(prevProps) {\n    if (this.shouldUseAudio(this.props) !== this.shouldUseAudio(prevProps)) {\n      this.removeListeners(this.prevPlayer, prevProps.url);\n      this.addListeners(this.player);\n    }\n    if (this.props.url !== prevProps.url && !(0, import_utils.isMediaStream)(this.props.url) && !(this.props.url instanceof Array)) {\n      this.player.srcObject = null;\n    }\n  }\n  componentWillUnmount() {\n    this.player.removeAttribute(\"src\");\n    this.removeListeners(this.player);\n    if (this.hls) {\n      this.hls.destroy();\n    }\n  }\n  addListeners(player) {\n    const { url, playsinline } = this.props;\n    player.addEventListener(\"play\", this.onPlay);\n    player.addEventListener(\"waiting\", this.onBuffer);\n    player.addEventListener(\"playing\", this.onBufferEnd);\n    player.addEventListener(\"pause\", this.onPause);\n    player.addEventListener(\"seeked\", this.onSeek);\n    player.addEventListener(\"ended\", this.onEnded);\n    player.addEventListener(\"error\", this.onError);\n    player.addEventListener(\"ratechange\", this.onPlayBackRateChange);\n    player.addEventListener(\"enterpictureinpicture\", this.onEnablePIP);\n    player.addEventListener(\"leavepictureinpicture\", this.onDisablePIP);\n    player.addEventListener(\"webkitpresentationmodechanged\", this.onPresentationModeChange);\n    if (!this.shouldUseHLS(url)) {\n      player.addEventListener(\"canplay\", this.onReady);\n    }\n    if (playsinline) {\n      player.setAttribute(\"playsinline\", \"\");\n      player.setAttribute(\"webkit-playsinline\", \"\");\n      player.setAttribute(\"x5-playsinline\", \"\");\n    }\n  }\n  removeListeners(player, url) {\n    player.removeEventListener(\"canplay\", this.onReady);\n    player.removeEventListener(\"play\", this.onPlay);\n    player.removeEventListener(\"waiting\", this.onBuffer);\n    player.removeEventListener(\"playing\", this.onBufferEnd);\n    player.removeEventListener(\"pause\", this.onPause);\n    player.removeEventListener(\"seeked\", this.onSeek);\n    player.removeEventListener(\"ended\", this.onEnded);\n    player.removeEventListener(\"error\", this.onError);\n    player.removeEventListener(\"ratechange\", this.onPlayBackRateChange);\n    player.removeEventListener(\"enterpictureinpicture\", this.onEnablePIP);\n    player.removeEventListener(\"leavepictureinpicture\", this.onDisablePIP);\n    player.removeEventListener(\"webkitpresentationmodechanged\", this.onPresentationModeChange);\n    if (!this.shouldUseHLS(url)) {\n      player.removeEventListener(\"canplay\", this.onReady);\n    }\n  }\n  shouldUseAudio(props) {\n    if (props.config.forceVideo) {\n      return false;\n    }\n    if (props.config.attributes.poster) {\n      return false;\n    }\n    return import_patterns.AUDIO_EXTENSIONS.test(props.url) || props.config.forceAudio;\n  }\n  shouldUseHLS(url) {\n    if (IS_SAFARI && this.props.config.forceSafariHLS || this.props.config.forceHLS) {\n      return true;\n    }\n    if (IS_IOS || this.props.config.forceDisableHls) {\n      return false;\n    }\n    return import_patterns.HLS_EXTENSIONS.test(url) || MATCH_CLOUDFLARE_STREAM.test(url);\n  }\n  shouldUseDASH(url) {\n    return import_patterns.DASH_EXTENSIONS.test(url) || this.props.config.forceDASH;\n  }\n  shouldUseFLV(url) {\n    return import_patterns.FLV_EXTENSIONS.test(url) || this.props.config.forceFLV;\n  }\n  load(url) {\n    const { hlsVersion, hlsOptions, dashVersion, flvVersion } = this.props.config;\n    if (this.hls) {\n      this.hls.destroy();\n    }\n    if (this.dash) {\n      this.dash.reset();\n    }\n    if (this.shouldUseHLS(url)) {\n      (0, import_utils.getSDK)(HLS_SDK_URL.replace(\"VERSION\", hlsVersion), HLS_GLOBAL).then((Hls) => {\n        this.hls = new Hls(hlsOptions);\n        this.hls.on(Hls.Events.MANIFEST_PARSED, () => {\n          this.props.onReady();\n        });\n        this.hls.on(Hls.Events.ERROR, (e, data) => {\n          this.props.onError(e, data, this.hls, Hls);\n        });\n        if (MATCH_CLOUDFLARE_STREAM.test(url)) {\n          const id = url.match(MATCH_CLOUDFLARE_STREAM)[1];\n          this.hls.loadSource(REPLACE_CLOUDFLARE_STREAM.replace(\"{id}\", id));\n        } else {\n          this.hls.loadSource(url);\n        }\n        this.hls.attachMedia(this.player);\n        this.props.onLoaded();\n      });\n    }\n    if (this.shouldUseDASH(url)) {\n      (0, import_utils.getSDK)(DASH_SDK_URL.replace(\"VERSION\", dashVersion), DASH_GLOBAL).then((dashjs) => {\n        this.dash = dashjs.MediaPlayer().create();\n        this.dash.initialize(this.player, url, this.props.playing);\n        this.dash.on(\"error\", this.props.onError);\n        if (parseInt(dashVersion) < 3) {\n          this.dash.getDebug().setLogToBrowserConsole(false);\n        } else {\n          this.dash.updateSettings({ debug: { logLevel: dashjs.Debug.LOG_LEVEL_NONE } });\n        }\n        this.props.onLoaded();\n      });\n    }\n    if (this.shouldUseFLV(url)) {\n      (0, import_utils.getSDK)(FLV_SDK_URL.replace(\"VERSION\", flvVersion), FLV_GLOBAL).then((flvjs) => {\n        this.flv = flvjs.createPlayer({ type: \"flv\", url });\n        this.flv.attachMediaElement(this.player);\n        this.flv.on(flvjs.Events.ERROR, (e, data) => {\n          this.props.onError(e, data, this.flv, flvjs);\n        });\n        this.flv.load();\n        this.props.onLoaded();\n      });\n    }\n    if (url instanceof Array) {\n      this.player.load();\n    } else if ((0, import_utils.isMediaStream)(url)) {\n      try {\n        this.player.srcObject = url;\n      } catch (e) {\n        this.player.src = window.URL.createObjectURL(url);\n      }\n    }\n  }\n  play() {\n    const promise = this.player.play();\n    if (promise) {\n      promise.catch(this.props.onError);\n    }\n  }\n  pause() {\n    this.player.pause();\n  }\n  stop() {\n    this.player.removeAttribute(\"src\");\n    if (this.dash) {\n      this.dash.reset();\n    }\n  }\n  seekTo(seconds, keepPlaying = true) {\n    this.player.currentTime = seconds;\n    if (!keepPlaying) {\n      this.pause();\n    }\n  }\n  setVolume(fraction) {\n    this.player.volume = fraction;\n  }\n  enablePIP() {\n    if (this.player.requestPictureInPicture && document.pictureInPictureElement !== this.player) {\n      this.player.requestPictureInPicture();\n    } else if ((0, import_utils.supportsWebKitPresentationMode)(this.player) && this.player.webkitPresentationMode !== \"picture-in-picture\") {\n      this.player.webkitSetPresentationMode(\"picture-in-picture\");\n    }\n  }\n  disablePIP() {\n    if (document.exitPictureInPicture && document.pictureInPictureElement === this.player) {\n      document.exitPictureInPicture();\n    } else if ((0, import_utils.supportsWebKitPresentationMode)(this.player) && this.player.webkitPresentationMode !== \"inline\") {\n      this.player.webkitSetPresentationMode(\"inline\");\n    }\n  }\n  setPlaybackRate(rate) {\n    try {\n      this.player.playbackRate = rate;\n    } catch (error) {\n      this.props.onError(error);\n    }\n  }\n  getDuration() {\n    if (!this.player)\n      return null;\n    const { duration, seekable } = this.player;\n    if (duration === Infinity && seekable.length > 0) {\n      return seekable.end(seekable.length - 1);\n    }\n    return duration;\n  }\n  getCurrentTime() {\n    if (!this.player)\n      return null;\n    return this.player.currentTime;\n  }\n  getSecondsLoaded() {\n    if (!this.player)\n      return null;\n    const { buffered } = this.player;\n    if (buffered.length === 0) {\n      return 0;\n    }\n    const end = buffered.end(buffered.length - 1);\n    const duration = this.getDuration();\n    if (end > duration) {\n      return duration;\n    }\n    return end;\n  }\n  getSource(url) {\n    const useHLS = this.shouldUseHLS(url);\n    const useDASH = this.shouldUseDASH(url);\n    const useFLV = this.shouldUseFLV(url);\n    if (url instanceof Array || (0, import_utils.isMediaStream)(url) || useHLS || useDASH || useFLV) {\n      return void 0;\n    }\n    if (MATCH_DROPBOX_URL.test(url)) {\n      return url.replace(\"www.dropbox.com\", \"dl.dropboxusercontent.com\");\n    }\n    return url;\n  }\n  render() {\n    const { url, playing, loop, controls, muted, config, width, height } = this.props;\n    const useAudio = this.shouldUseAudio(this.props);\n    const Element = useAudio ? \"audio\" : \"video\";\n    const style = {\n      width: width === \"auto\" ? width : \"100%\",\n      height: height === \"auto\" ? height : \"100%\"\n    };\n    return /* @__PURE__ */ import_react.default.createElement(\n      Element,\n      {\n        ref: this.ref,\n        src: this.getSource(url),\n        style,\n        preload: \"auto\",\n        autoPlay: playing || void 0,\n        controls,\n        muted,\n        loop,\n        ...config.attributes\n      },\n      url instanceof Array && url.map(this.renderSourceElement),\n      config.tracks.map(this.renderTrack)\n    );\n  }\n}\n__publicField(FilePlayer, \"displayName\", \"FilePlayer\");\n__publicField(FilePlayer, \"canPlay\", import_patterns.canPlay.file);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9yZWFjdC1wbGF5ZXIvbGliL3BsYXllcnMvRmlsZVBsYXllci5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4RUFBOEUsNkRBQTZEO0FBQzNJO0FBQ0E7QUFDQSw4QkFBOEIsa0NBQWtDO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsNEZBQTRGO0FBQ3pIO0FBQ0E7QUFDQTtBQUNBLG1HQUFtRztBQUNuRztBQUNBO0FBQ0E7QUFDQTtBQUNBLHlFQUF5RSw4QkFBOEI7QUFDdkc7QUFDQTtBQUNBLG9EQUFvRCxrQkFBa0IsYUFBYTtBQUNuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLDJCQUEyQixtQkFBTyxDQUFDLG1GQUFPO0FBQzFDLG1CQUFtQixtQkFBTyxDQUFDLDhFQUFVO0FBQ3JDLHNCQUFzQixtQkFBTyxDQUFDLG9GQUFhO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RCxHQUFHO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLHdCQUF3QjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsZ0JBQWdCLHlCQUF5QjtBQUN6QztBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsOEVBQThFLHlCQUF5QjtBQUN2RztBQUNBLDRFQUE0RSx1QkFBdUI7QUFDbkcsS0FBSztBQUNMO0FBQ0EsMkVBQTJFLHNCQUFzQjtBQUNqRyxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxtQkFBbUI7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksa0RBQWtEO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0Esa0VBQWtFLEdBQUc7QUFDckUsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YscUNBQXFDLFNBQVMseUNBQXlDO0FBQ3ZGO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLGtCQUFrQjtBQUMxRDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVkscUJBQXFCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxXQUFXO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDZEQUE2RDtBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXBsYXllci9saWIvcGxheWVycy9GaWxlUGxheWVyLmpzPzg5YmYiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fY3JlYXRlID0gT2JqZWN0LmNyZWF0ZTtcbnZhciBfX2RlZlByb3AgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgX19nZXRPd25Qcm9wRGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG52YXIgX19nZXRPd25Qcm9wTmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcztcbnZhciBfX2dldFByb3RvT2YgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG52YXIgX19oYXNPd25Qcm9wID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBfX2RlZk5vcm1hbFByb3AgPSAob2JqLCBrZXksIHZhbHVlKSA9PiBrZXkgaW4gb2JqID8gX19kZWZQcm9wKG9iaiwga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUsIHZhbHVlIH0pIDogb2JqW2tleV0gPSB2YWx1ZTtcbnZhciBfX2V4cG9ydCA9ICh0YXJnZXQsIGFsbCkgPT4ge1xuICBmb3IgKHZhciBuYW1lIGluIGFsbClcbiAgICBfX2RlZlByb3AodGFyZ2V0LCBuYW1lLCB7IGdldDogYWxsW25hbWVdLCBlbnVtZXJhYmxlOiB0cnVlIH0pO1xufTtcbnZhciBfX2NvcHlQcm9wcyA9ICh0bywgZnJvbSwgZXhjZXB0LCBkZXNjKSA9PiB7XG4gIGlmIChmcm9tICYmIHR5cGVvZiBmcm9tID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBmcm9tID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBmb3IgKGxldCBrZXkgb2YgX19nZXRPd25Qcm9wTmFtZXMoZnJvbSkpXG4gICAgICBpZiAoIV9faGFzT3duUHJvcC5jYWxsKHRvLCBrZXkpICYmIGtleSAhPT0gZXhjZXB0KVxuICAgICAgICBfX2RlZlByb3AodG8sIGtleSwgeyBnZXQ6ICgpID0+IGZyb21ba2V5XSwgZW51bWVyYWJsZTogIShkZXNjID0gX19nZXRPd25Qcm9wRGVzYyhmcm9tLCBrZXkpKSB8fCBkZXNjLmVudW1lcmFibGUgfSk7XG4gIH1cbiAgcmV0dXJuIHRvO1xufTtcbnZhciBfX3RvRVNNID0gKG1vZCwgaXNOb2RlTW9kZSwgdGFyZ2V0KSA9PiAodGFyZ2V0ID0gbW9kICE9IG51bGwgPyBfX2NyZWF0ZShfX2dldFByb3RvT2YobW9kKSkgOiB7fSwgX19jb3B5UHJvcHMoXG4gIC8vIElmIHRoZSBpbXBvcnRlciBpcyBpbiBub2RlIGNvbXBhdGliaWxpdHkgbW9kZSBvciB0aGlzIGlzIG5vdCBhbiBFU01cbiAgLy8gZmlsZSB0aGF0IGhhcyBiZWVuIGNvbnZlcnRlZCB0byBhIENvbW1vbkpTIGZpbGUgdXNpbmcgYSBCYWJlbC1cbiAgLy8gY29tcGF0aWJsZSB0cmFuc2Zvcm0gKGkuZS4gXCJfX2VzTW9kdWxlXCIgaGFzIG5vdCBiZWVuIHNldCksIHRoZW4gc2V0XG4gIC8vIFwiZGVmYXVsdFwiIHRvIHRoZSBDb21tb25KUyBcIm1vZHVsZS5leHBvcnRzXCIgZm9yIG5vZGUgY29tcGF0aWJpbGl0eS5cbiAgaXNOb2RlTW9kZSB8fCAhbW9kIHx8ICFtb2QuX19lc01vZHVsZSA/IF9fZGVmUHJvcCh0YXJnZXQsIFwiZGVmYXVsdFwiLCB7IHZhbHVlOiBtb2QsIGVudW1lcmFibGU6IHRydWUgfSkgOiB0YXJnZXQsXG4gIG1vZFxuKSk7XG52YXIgX190b0NvbW1vbkpTID0gKG1vZCkgPT4gX19jb3B5UHJvcHMoX19kZWZQcm9wKHt9LCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KSwgbW9kKTtcbnZhciBfX3B1YmxpY0ZpZWxkID0gKG9iaiwga2V5LCB2YWx1ZSkgPT4ge1xuICBfX2RlZk5vcm1hbFByb3Aob2JqLCB0eXBlb2Yga2V5ICE9PSBcInN5bWJvbFwiID8ga2V5ICsgXCJcIiA6IGtleSwgdmFsdWUpO1xuICByZXR1cm4gdmFsdWU7XG59O1xudmFyIEZpbGVQbGF5ZXJfZXhwb3J0cyA9IHt9O1xuX19leHBvcnQoRmlsZVBsYXllcl9leHBvcnRzLCB7XG4gIGRlZmF1bHQ6ICgpID0+IEZpbGVQbGF5ZXJcbn0pO1xubW9kdWxlLmV4cG9ydHMgPSBfX3RvQ29tbW9uSlMoRmlsZVBsYXllcl9leHBvcnRzKTtcbnZhciBpbXBvcnRfcmVhY3QgPSBfX3RvRVNNKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgaW1wb3J0X3V0aWxzID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xudmFyIGltcG9ydF9wYXR0ZXJucyA9IHJlcXVpcmUoXCIuLi9wYXR0ZXJuc1wiKTtcbmNvbnN0IEhBU19OQVZJR0FUT1IgPSB0eXBlb2YgbmF2aWdhdG9yICE9PSBcInVuZGVmaW5lZFwiO1xuY29uc3QgSVNfSVBBRF9QUk8gPSBIQVNfTkFWSUdBVE9SICYmIG5hdmlnYXRvci5wbGF0Zm9ybSA9PT0gXCJNYWNJbnRlbFwiICYmIG5hdmlnYXRvci5tYXhUb3VjaFBvaW50cyA+IDE7XG5jb25zdCBJU19JT1MgPSBIQVNfTkFWSUdBVE9SICYmICgvaVBhZHxpUGhvbmV8aVBvZC8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSB8fCBJU19JUEFEX1BSTykgJiYgIXdpbmRvdy5NU1N0cmVhbTtcbmNvbnN0IElTX1NBRkFSSSA9IEhBU19OQVZJR0FUT1IgJiYgL14oKD8hY2hyb21lfGFuZHJvaWQpLikqc2FmYXJpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSAmJiAhd2luZG93Lk1TU3RyZWFtO1xuY29uc3QgSExTX1NES19VUkwgPSBcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vaGxzLmpzQFZFUlNJT04vZGlzdC9obHMubWluLmpzXCI7XG5jb25zdCBITFNfR0xPQkFMID0gXCJIbHNcIjtcbmNvbnN0IERBU0hfU0RLX1VSTCA9IFwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvZGFzaGpzL1ZFUlNJT04vZGFzaC5hbGwubWluLmpzXCI7XG5jb25zdCBEQVNIX0dMT0JBTCA9IFwiZGFzaGpzXCI7XG5jb25zdCBGTFZfU0RLX1VSTCA9IFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9mbHYuanNAVkVSU0lPTi9kaXN0L2Zsdi5taW4uanNcIjtcbmNvbnN0IEZMVl9HTE9CQUwgPSBcImZsdmpzXCI7XG5jb25zdCBNQVRDSF9EUk9QQk9YX1VSTCA9IC93d3dcXC5kcm9wYm94XFwuY29tXFwvLisvO1xuY29uc3QgTUFUQ0hfQ0xPVURGTEFSRV9TVFJFQU0gPSAvaHR0cHM6XFwvXFwvd2F0Y2hcXC5jbG91ZGZsYXJlc3RyZWFtXFwuY29tXFwvKFthLXowLTldKykvO1xuY29uc3QgUkVQTEFDRV9DTE9VREZMQVJFX1NUUkVBTSA9IFwiaHR0cHM6Ly92aWRlb2RlbGl2ZXJ5Lm5ldC97aWR9L21hbmlmZXN0L3ZpZGVvLm0zdThcIjtcbmNsYXNzIEZpbGVQbGF5ZXIgZXh0ZW5kcyBpbXBvcnRfcmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAvLyBQcm94eSBtZXRob2RzIHRvIHByZXZlbnQgbGlzdGVuZXIgbGVha3NcbiAgICBfX3B1YmxpY0ZpZWxkKHRoaXMsIFwib25SZWFkeVwiLCAoLi4uYXJncykgPT4gdGhpcy5wcm9wcy5vblJlYWR5KC4uLmFyZ3MpKTtcbiAgICBfX3B1YmxpY0ZpZWxkKHRoaXMsIFwib25QbGF5XCIsICguLi5hcmdzKSA9PiB0aGlzLnByb3BzLm9uUGxheSguLi5hcmdzKSk7XG4gICAgX19wdWJsaWNGaWVsZCh0aGlzLCBcIm9uQnVmZmVyXCIsICguLi5hcmdzKSA9PiB0aGlzLnByb3BzLm9uQnVmZmVyKC4uLmFyZ3MpKTtcbiAgICBfX3B1YmxpY0ZpZWxkKHRoaXMsIFwib25CdWZmZXJFbmRcIiwgKC4uLmFyZ3MpID0+IHRoaXMucHJvcHMub25CdWZmZXJFbmQoLi4uYXJncykpO1xuICAgIF9fcHVibGljRmllbGQodGhpcywgXCJvblBhdXNlXCIsICguLi5hcmdzKSA9PiB0aGlzLnByb3BzLm9uUGF1c2UoLi4uYXJncykpO1xuICAgIF9fcHVibGljRmllbGQodGhpcywgXCJvbkVuZGVkXCIsICguLi5hcmdzKSA9PiB0aGlzLnByb3BzLm9uRW5kZWQoLi4uYXJncykpO1xuICAgIF9fcHVibGljRmllbGQodGhpcywgXCJvbkVycm9yXCIsICguLi5hcmdzKSA9PiB0aGlzLnByb3BzLm9uRXJyb3IoLi4uYXJncykpO1xuICAgIF9fcHVibGljRmllbGQodGhpcywgXCJvblBsYXlCYWNrUmF0ZUNoYW5nZVwiLCAoZXZlbnQpID0+IHRoaXMucHJvcHMub25QbGF5YmFja1JhdGVDaGFuZ2UoZXZlbnQudGFyZ2V0LnBsYXliYWNrUmF0ZSkpO1xuICAgIF9fcHVibGljRmllbGQodGhpcywgXCJvbkVuYWJsZVBJUFwiLCAoLi4uYXJncykgPT4gdGhpcy5wcm9wcy5vbkVuYWJsZVBJUCguLi5hcmdzKSk7XG4gICAgX19wdWJsaWNGaWVsZCh0aGlzLCBcIm9uRGlzYWJsZVBJUFwiLCAoZSkgPT4ge1xuICAgICAgY29uc3QgeyBvbkRpc2FibGVQSVAsIHBsYXlpbmcgfSA9IHRoaXMucHJvcHM7XG4gICAgICBvbkRpc2FibGVQSVAoZSk7XG4gICAgICBpZiAocGxheWluZykge1xuICAgICAgICB0aGlzLnBsYXkoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBfX3B1YmxpY0ZpZWxkKHRoaXMsIFwib25QcmVzZW50YXRpb25Nb2RlQ2hhbmdlXCIsIChlKSA9PiB7XG4gICAgICBpZiAodGhpcy5wbGF5ZXIgJiYgKDAsIGltcG9ydF91dGlscy5zdXBwb3J0c1dlYktpdFByZXNlbnRhdGlvbk1vZGUpKHRoaXMucGxheWVyKSkge1xuICAgICAgICBjb25zdCB7IHdlYmtpdFByZXNlbnRhdGlvbk1vZGUgfSA9IHRoaXMucGxheWVyO1xuICAgICAgICBpZiAod2Via2l0UHJlc2VudGF0aW9uTW9kZSA9PT0gXCJwaWN0dXJlLWluLXBpY3R1cmVcIikge1xuICAgICAgICAgIHRoaXMub25FbmFibGVQSVAoZSk7XG4gICAgICAgIH0gZWxzZSBpZiAod2Via2l0UHJlc2VudGF0aW9uTW9kZSA9PT0gXCJpbmxpbmVcIikge1xuICAgICAgICAgIHRoaXMub25EaXNhYmxlUElQKGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgX19wdWJsaWNGaWVsZCh0aGlzLCBcIm9uU2Vla1wiLCAoZSkgPT4ge1xuICAgICAgdGhpcy5wcm9wcy5vblNlZWsoZS50YXJnZXQuY3VycmVudFRpbWUpO1xuICAgIH0pO1xuICAgIF9fcHVibGljRmllbGQodGhpcywgXCJtdXRlXCIsICgpID0+IHtcbiAgICAgIHRoaXMucGxheWVyLm11dGVkID0gdHJ1ZTtcbiAgICB9KTtcbiAgICBfX3B1YmxpY0ZpZWxkKHRoaXMsIFwidW5tdXRlXCIsICgpID0+IHtcbiAgICAgIHRoaXMucGxheWVyLm11dGVkID0gZmFsc2U7XG4gICAgfSk7XG4gICAgX19wdWJsaWNGaWVsZCh0aGlzLCBcInJlbmRlclNvdXJjZUVsZW1lbnRcIiwgKHNvdXJjZSwgaW5kZXgpID0+IHtcbiAgICAgIGlmICh0eXBlb2Ygc291cmNlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHJldHVybiAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNvdXJjZVwiLCB7IGtleTogaW5kZXgsIHNyYzogc291cmNlIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic291cmNlXCIsIHsga2V5OiBpbmRleCwgLi4uc291cmNlIH0pO1xuICAgIH0pO1xuICAgIF9fcHVibGljRmllbGQodGhpcywgXCJyZW5kZXJUcmFja1wiLCAodHJhY2ssIGluZGV4KSA9PiB7XG4gICAgICByZXR1cm4gLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJ0cmFja1wiLCB7IGtleTogaW5kZXgsIC4uLnRyYWNrIH0pO1xuICAgIH0pO1xuICAgIF9fcHVibGljRmllbGQodGhpcywgXCJyZWZcIiwgKHBsYXllcikgPT4ge1xuICAgICAgaWYgKHRoaXMucGxheWVyKSB7XG4gICAgICAgIHRoaXMucHJldlBsYXllciA9IHRoaXMucGxheWVyO1xuICAgICAgfVxuICAgICAgdGhpcy5wbGF5ZXIgPSBwbGF5ZXI7XG4gICAgfSk7XG4gIH1cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5wcm9wcy5vbk1vdW50ICYmIHRoaXMucHJvcHMub25Nb3VudCh0aGlzKTtcbiAgICB0aGlzLmFkZExpc3RlbmVycyh0aGlzLnBsYXllcik7XG4gICAgY29uc3Qgc3JjID0gdGhpcy5nZXRTb3VyY2UodGhpcy5wcm9wcy51cmwpO1xuICAgIGlmIChzcmMpIHtcbiAgICAgIHRoaXMucGxheWVyLnNyYyA9IHNyYztcbiAgICB9XG4gICAgaWYgKElTX0lPUyB8fCB0aGlzLnByb3BzLmNvbmZpZy5mb3JjZURpc2FibGVIbHMpIHtcbiAgICAgIHRoaXMucGxheWVyLmxvYWQoKTtcbiAgICB9XG4gIH1cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIGlmICh0aGlzLnNob3VsZFVzZUF1ZGlvKHRoaXMucHJvcHMpICE9PSB0aGlzLnNob3VsZFVzZUF1ZGlvKHByZXZQcm9wcykpIHtcbiAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXJzKHRoaXMucHJldlBsYXllciwgcHJldlByb3BzLnVybCk7XG4gICAgICB0aGlzLmFkZExpc3RlbmVycyh0aGlzLnBsYXllcik7XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLnVybCAhPT0gcHJldlByb3BzLnVybCAmJiAhKDAsIGltcG9ydF91dGlscy5pc01lZGlhU3RyZWFtKSh0aGlzLnByb3BzLnVybCkgJiYgISh0aGlzLnByb3BzLnVybCBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgICAgdGhpcy5wbGF5ZXIuc3JjT2JqZWN0ID0gbnVsbDtcbiAgICB9XG4gIH1cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5wbGF5ZXIucmVtb3ZlQXR0cmlidXRlKFwic3JjXCIpO1xuICAgIHRoaXMucmVtb3ZlTGlzdGVuZXJzKHRoaXMucGxheWVyKTtcbiAgICBpZiAodGhpcy5obHMpIHtcbiAgICAgIHRoaXMuaGxzLmRlc3Ryb3koKTtcbiAgICB9XG4gIH1cbiAgYWRkTGlzdGVuZXJzKHBsYXllcikge1xuICAgIGNvbnN0IHsgdXJsLCBwbGF5c2lubGluZSB9ID0gdGhpcy5wcm9wcztcbiAgICBwbGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcihcInBsYXlcIiwgdGhpcy5vblBsYXkpO1xuICAgIHBsYXllci5hZGRFdmVudExpc3RlbmVyKFwid2FpdGluZ1wiLCB0aGlzLm9uQnVmZmVyKTtcbiAgICBwbGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcihcInBsYXlpbmdcIiwgdGhpcy5vbkJ1ZmZlckVuZCk7XG4gICAgcGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoXCJwYXVzZVwiLCB0aGlzLm9uUGF1c2UpO1xuICAgIHBsYXllci5hZGRFdmVudExpc3RlbmVyKFwic2Vla2VkXCIsIHRoaXMub25TZWVrKTtcbiAgICBwbGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcihcImVuZGVkXCIsIHRoaXMub25FbmRlZCk7XG4gICAgcGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCB0aGlzLm9uRXJyb3IpO1xuICAgIHBsYXllci5hZGRFdmVudExpc3RlbmVyKFwicmF0ZWNoYW5nZVwiLCB0aGlzLm9uUGxheUJhY2tSYXRlQ2hhbmdlKTtcbiAgICBwbGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcihcImVudGVycGljdHVyZWlucGljdHVyZVwiLCB0aGlzLm9uRW5hYmxlUElQKTtcbiAgICBwbGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcihcImxlYXZlcGljdHVyZWlucGljdHVyZVwiLCB0aGlzLm9uRGlzYWJsZVBJUCk7XG4gICAgcGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoXCJ3ZWJraXRwcmVzZW50YXRpb25tb2RlY2hhbmdlZFwiLCB0aGlzLm9uUHJlc2VudGF0aW9uTW9kZUNoYW5nZSk7XG4gICAgaWYgKCF0aGlzLnNob3VsZFVzZUhMUyh1cmwpKSB7XG4gICAgICBwbGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNhbnBsYXlcIiwgdGhpcy5vblJlYWR5KTtcbiAgICB9XG4gICAgaWYgKHBsYXlzaW5saW5lKSB7XG4gICAgICBwbGF5ZXIuc2V0QXR0cmlidXRlKFwicGxheXNpbmxpbmVcIiwgXCJcIik7XG4gICAgICBwbGF5ZXIuc2V0QXR0cmlidXRlKFwid2Via2l0LXBsYXlzaW5saW5lXCIsIFwiXCIpO1xuICAgICAgcGxheWVyLnNldEF0dHJpYnV0ZShcIng1LXBsYXlzaW5saW5lXCIsIFwiXCIpO1xuICAgIH1cbiAgfVxuICByZW1vdmVMaXN0ZW5lcnMocGxheWVyLCB1cmwpIHtcbiAgICBwbGF5ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNhbnBsYXlcIiwgdGhpcy5vblJlYWR5KTtcbiAgICBwbGF5ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBsYXlcIiwgdGhpcy5vblBsYXkpO1xuICAgIHBsYXllci5yZW1vdmVFdmVudExpc3RlbmVyKFwid2FpdGluZ1wiLCB0aGlzLm9uQnVmZmVyKTtcbiAgICBwbGF5ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBsYXlpbmdcIiwgdGhpcy5vbkJ1ZmZlckVuZCk7XG4gICAgcGxheWVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwYXVzZVwiLCB0aGlzLm9uUGF1c2UpO1xuICAgIHBsYXllci5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Vla2VkXCIsIHRoaXMub25TZWVrKTtcbiAgICBwbGF5ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImVuZGVkXCIsIHRoaXMub25FbmRlZCk7XG4gICAgcGxheWVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCB0aGlzLm9uRXJyb3IpO1xuICAgIHBsYXllci5yZW1vdmVFdmVudExpc3RlbmVyKFwicmF0ZWNoYW5nZVwiLCB0aGlzLm9uUGxheUJhY2tSYXRlQ2hhbmdlKTtcbiAgICBwbGF5ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImVudGVycGljdHVyZWlucGljdHVyZVwiLCB0aGlzLm9uRW5hYmxlUElQKTtcbiAgICBwbGF5ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImxlYXZlcGljdHVyZWlucGljdHVyZVwiLCB0aGlzLm9uRGlzYWJsZVBJUCk7XG4gICAgcGxheWVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ3ZWJraXRwcmVzZW50YXRpb25tb2RlY2hhbmdlZFwiLCB0aGlzLm9uUHJlc2VudGF0aW9uTW9kZUNoYW5nZSk7XG4gICAgaWYgKCF0aGlzLnNob3VsZFVzZUhMUyh1cmwpKSB7XG4gICAgICBwbGF5ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNhbnBsYXlcIiwgdGhpcy5vblJlYWR5KTtcbiAgICB9XG4gIH1cbiAgc2hvdWxkVXNlQXVkaW8ocHJvcHMpIHtcbiAgICBpZiAocHJvcHMuY29uZmlnLmZvcmNlVmlkZW8pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHByb3BzLmNvbmZpZy5hdHRyaWJ1dGVzLnBvc3Rlcikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gaW1wb3J0X3BhdHRlcm5zLkFVRElPX0VYVEVOU0lPTlMudGVzdChwcm9wcy51cmwpIHx8IHByb3BzLmNvbmZpZy5mb3JjZUF1ZGlvO1xuICB9XG4gIHNob3VsZFVzZUhMUyh1cmwpIHtcbiAgICBpZiAoSVNfU0FGQVJJICYmIHRoaXMucHJvcHMuY29uZmlnLmZvcmNlU2FmYXJpSExTIHx8IHRoaXMucHJvcHMuY29uZmlnLmZvcmNlSExTKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKElTX0lPUyB8fCB0aGlzLnByb3BzLmNvbmZpZy5mb3JjZURpc2FibGVIbHMpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIGltcG9ydF9wYXR0ZXJucy5ITFNfRVhURU5TSU9OUy50ZXN0KHVybCkgfHwgTUFUQ0hfQ0xPVURGTEFSRV9TVFJFQU0udGVzdCh1cmwpO1xuICB9XG4gIHNob3VsZFVzZURBU0godXJsKSB7XG4gICAgcmV0dXJuIGltcG9ydF9wYXR0ZXJucy5EQVNIX0VYVEVOU0lPTlMudGVzdCh1cmwpIHx8IHRoaXMucHJvcHMuY29uZmlnLmZvcmNlREFTSDtcbiAgfVxuICBzaG91bGRVc2VGTFYodXJsKSB7XG4gICAgcmV0dXJuIGltcG9ydF9wYXR0ZXJucy5GTFZfRVhURU5TSU9OUy50ZXN0KHVybCkgfHwgdGhpcy5wcm9wcy5jb25maWcuZm9yY2VGTFY7XG4gIH1cbiAgbG9hZCh1cmwpIHtcbiAgICBjb25zdCB7IGhsc1ZlcnNpb24sIGhsc09wdGlvbnMsIGRhc2hWZXJzaW9uLCBmbHZWZXJzaW9uIH0gPSB0aGlzLnByb3BzLmNvbmZpZztcbiAgICBpZiAodGhpcy5obHMpIHtcbiAgICAgIHRoaXMuaGxzLmRlc3Ryb3koKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZGFzaCkge1xuICAgICAgdGhpcy5kYXNoLnJlc2V0KCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnNob3VsZFVzZUhMUyh1cmwpKSB7XG4gICAgICAoMCwgaW1wb3J0X3V0aWxzLmdldFNESykoSExTX1NES19VUkwucmVwbGFjZShcIlZFUlNJT05cIiwgaGxzVmVyc2lvbiksIEhMU19HTE9CQUwpLnRoZW4oKEhscykgPT4ge1xuICAgICAgICB0aGlzLmhscyA9IG5ldyBIbHMoaGxzT3B0aW9ucyk7XG4gICAgICAgIHRoaXMuaGxzLm9uKEhscy5FdmVudHMuTUFOSUZFU1RfUEFSU0VELCAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5vblJlYWR5KCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmhscy5vbihIbHMuRXZlbnRzLkVSUk9SLCAoZSwgZGF0YSkgPT4ge1xuICAgICAgICAgIHRoaXMucHJvcHMub25FcnJvcihlLCBkYXRhLCB0aGlzLmhscywgSGxzKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChNQVRDSF9DTE9VREZMQVJFX1NUUkVBTS50ZXN0KHVybCkpIHtcbiAgICAgICAgICBjb25zdCBpZCA9IHVybC5tYXRjaChNQVRDSF9DTE9VREZMQVJFX1NUUkVBTSlbMV07XG4gICAgICAgICAgdGhpcy5obHMubG9hZFNvdXJjZShSRVBMQUNFX0NMT1VERkxBUkVfU1RSRUFNLnJlcGxhY2UoXCJ7aWR9XCIsIGlkKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5obHMubG9hZFNvdXJjZSh1cmwpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaGxzLmF0dGFjaE1lZGlhKHRoaXMucGxheWVyKTtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkxvYWRlZCgpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmICh0aGlzLnNob3VsZFVzZURBU0godXJsKSkge1xuICAgICAgKDAsIGltcG9ydF91dGlscy5nZXRTREspKERBU0hfU0RLX1VSTC5yZXBsYWNlKFwiVkVSU0lPTlwiLCBkYXNoVmVyc2lvbiksIERBU0hfR0xPQkFMKS50aGVuKChkYXNoanMpID0+IHtcbiAgICAgICAgdGhpcy5kYXNoID0gZGFzaGpzLk1lZGlhUGxheWVyKCkuY3JlYXRlKCk7XG4gICAgICAgIHRoaXMuZGFzaC5pbml0aWFsaXplKHRoaXMucGxheWVyLCB1cmwsIHRoaXMucHJvcHMucGxheWluZyk7XG4gICAgICAgIHRoaXMuZGFzaC5vbihcImVycm9yXCIsIHRoaXMucHJvcHMub25FcnJvcik7XG4gICAgICAgIGlmIChwYXJzZUludChkYXNoVmVyc2lvbikgPCAzKSB7XG4gICAgICAgICAgdGhpcy5kYXNoLmdldERlYnVnKCkuc2V0TG9nVG9Ccm93c2VyQ29uc29sZShmYWxzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5kYXNoLnVwZGF0ZVNldHRpbmdzKHsgZGVidWc6IHsgbG9nTGV2ZWw6IGRhc2hqcy5EZWJ1Zy5MT0dfTEVWRUxfTk9ORSB9IH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJvcHMub25Mb2FkZWQoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAodGhpcy5zaG91bGRVc2VGTFYodXJsKSkge1xuICAgICAgKDAsIGltcG9ydF91dGlscy5nZXRTREspKEZMVl9TREtfVVJMLnJlcGxhY2UoXCJWRVJTSU9OXCIsIGZsdlZlcnNpb24pLCBGTFZfR0xPQkFMKS50aGVuKChmbHZqcykgPT4ge1xuICAgICAgICB0aGlzLmZsdiA9IGZsdmpzLmNyZWF0ZVBsYXllcih7IHR5cGU6IFwiZmx2XCIsIHVybCB9KTtcbiAgICAgICAgdGhpcy5mbHYuYXR0YWNoTWVkaWFFbGVtZW50KHRoaXMucGxheWVyKTtcbiAgICAgICAgdGhpcy5mbHYub24oZmx2anMuRXZlbnRzLkVSUk9SLCAoZSwgZGF0YSkgPT4ge1xuICAgICAgICAgIHRoaXMucHJvcHMub25FcnJvcihlLCBkYXRhLCB0aGlzLmZsdiwgZmx2anMpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5mbHYubG9hZCgpO1xuICAgICAgICB0aGlzLnByb3BzLm9uTG9hZGVkKCk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHVybCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICB0aGlzLnBsYXllci5sb2FkKCk7XG4gICAgfSBlbHNlIGlmICgoMCwgaW1wb3J0X3V0aWxzLmlzTWVkaWFTdHJlYW0pKHVybCkpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMucGxheWVyLnNyY09iamVjdCA9IHVybDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXIuc3JjID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwodXJsKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcGxheSgpIHtcbiAgICBjb25zdCBwcm9taXNlID0gdGhpcy5wbGF5ZXIucGxheSgpO1xuICAgIGlmIChwcm9taXNlKSB7XG4gICAgICBwcm9taXNlLmNhdGNoKHRoaXMucHJvcHMub25FcnJvcik7XG4gICAgfVxuICB9XG4gIHBhdXNlKCkge1xuICAgIHRoaXMucGxheWVyLnBhdXNlKCk7XG4gIH1cbiAgc3RvcCgpIHtcbiAgICB0aGlzLnBsYXllci5yZW1vdmVBdHRyaWJ1dGUoXCJzcmNcIik7XG4gICAgaWYgKHRoaXMuZGFzaCkge1xuICAgICAgdGhpcy5kYXNoLnJlc2V0KCk7XG4gICAgfVxuICB9XG4gIHNlZWtUbyhzZWNvbmRzLCBrZWVwUGxheWluZyA9IHRydWUpIHtcbiAgICB0aGlzLnBsYXllci5jdXJyZW50VGltZSA9IHNlY29uZHM7XG4gICAgaWYgKCFrZWVwUGxheWluZykge1xuICAgICAgdGhpcy5wYXVzZSgpO1xuICAgIH1cbiAgfVxuICBzZXRWb2x1bWUoZnJhY3Rpb24pIHtcbiAgICB0aGlzLnBsYXllci52b2x1bWUgPSBmcmFjdGlvbjtcbiAgfVxuICBlbmFibGVQSVAoKSB7XG4gICAgaWYgKHRoaXMucGxheWVyLnJlcXVlc3RQaWN0dXJlSW5QaWN0dXJlICYmIGRvY3VtZW50LnBpY3R1cmVJblBpY3R1cmVFbGVtZW50ICE9PSB0aGlzLnBsYXllcikge1xuICAgICAgdGhpcy5wbGF5ZXIucmVxdWVzdFBpY3R1cmVJblBpY3R1cmUoKTtcbiAgICB9IGVsc2UgaWYgKCgwLCBpbXBvcnRfdXRpbHMuc3VwcG9ydHNXZWJLaXRQcmVzZW50YXRpb25Nb2RlKSh0aGlzLnBsYXllcikgJiYgdGhpcy5wbGF5ZXIud2Via2l0UHJlc2VudGF0aW9uTW9kZSAhPT0gXCJwaWN0dXJlLWluLXBpY3R1cmVcIikge1xuICAgICAgdGhpcy5wbGF5ZXIud2Via2l0U2V0UHJlc2VudGF0aW9uTW9kZShcInBpY3R1cmUtaW4tcGljdHVyZVwiKTtcbiAgICB9XG4gIH1cbiAgZGlzYWJsZVBJUCgpIHtcbiAgICBpZiAoZG9jdW1lbnQuZXhpdFBpY3R1cmVJblBpY3R1cmUgJiYgZG9jdW1lbnQucGljdHVyZUluUGljdHVyZUVsZW1lbnQgPT09IHRoaXMucGxheWVyKSB7XG4gICAgICBkb2N1bWVudC5leGl0UGljdHVyZUluUGljdHVyZSgpO1xuICAgIH0gZWxzZSBpZiAoKDAsIGltcG9ydF91dGlscy5zdXBwb3J0c1dlYktpdFByZXNlbnRhdGlvbk1vZGUpKHRoaXMucGxheWVyKSAmJiB0aGlzLnBsYXllci53ZWJraXRQcmVzZW50YXRpb25Nb2RlICE9PSBcImlubGluZVwiKSB7XG4gICAgICB0aGlzLnBsYXllci53ZWJraXRTZXRQcmVzZW50YXRpb25Nb2RlKFwiaW5saW5lXCIpO1xuICAgIH1cbiAgfVxuICBzZXRQbGF5YmFja1JhdGUocmF0ZSkge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLnBsYXllci5wbGF5YmFja1JhdGUgPSByYXRlO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aGlzLnByb3BzLm9uRXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgfVxuICBnZXREdXJhdGlvbigpIHtcbiAgICBpZiAoIXRoaXMucGxheWVyKVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgY29uc3QgeyBkdXJhdGlvbiwgc2Vla2FibGUgfSA9IHRoaXMucGxheWVyO1xuICAgIGlmIChkdXJhdGlvbiA9PT0gSW5maW5pdHkgJiYgc2Vla2FibGUubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIHNlZWthYmxlLmVuZChzZWVrYWJsZS5sZW5ndGggLSAxKTtcbiAgICB9XG4gICAgcmV0dXJuIGR1cmF0aW9uO1xuICB9XG4gIGdldEN1cnJlbnRUaW1lKCkge1xuICAgIGlmICghdGhpcy5wbGF5ZXIpXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gdGhpcy5wbGF5ZXIuY3VycmVudFRpbWU7XG4gIH1cbiAgZ2V0U2Vjb25kc0xvYWRlZCgpIHtcbiAgICBpZiAoIXRoaXMucGxheWVyKVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgY29uc3QgeyBidWZmZXJlZCB9ID0gdGhpcy5wbGF5ZXI7XG4gICAgaWYgKGJ1ZmZlcmVkLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIGNvbnN0IGVuZCA9IGJ1ZmZlcmVkLmVuZChidWZmZXJlZC5sZW5ndGggLSAxKTtcbiAgICBjb25zdCBkdXJhdGlvbiA9IHRoaXMuZ2V0RHVyYXRpb24oKTtcbiAgICBpZiAoZW5kID4gZHVyYXRpb24pIHtcbiAgICAgIHJldHVybiBkdXJhdGlvbjtcbiAgICB9XG4gICAgcmV0dXJuIGVuZDtcbiAgfVxuICBnZXRTb3VyY2UodXJsKSB7XG4gICAgY29uc3QgdXNlSExTID0gdGhpcy5zaG91bGRVc2VITFModXJsKTtcbiAgICBjb25zdCB1c2VEQVNIID0gdGhpcy5zaG91bGRVc2VEQVNIKHVybCk7XG4gICAgY29uc3QgdXNlRkxWID0gdGhpcy5zaG91bGRVc2VGTFYodXJsKTtcbiAgICBpZiAodXJsIGluc3RhbmNlb2YgQXJyYXkgfHwgKDAsIGltcG9ydF91dGlscy5pc01lZGlhU3RyZWFtKSh1cmwpIHx8IHVzZUhMUyB8fCB1c2VEQVNIIHx8IHVzZUZMVikge1xuICAgICAgcmV0dXJuIHZvaWQgMDtcbiAgICB9XG4gICAgaWYgKE1BVENIX0RST1BCT1hfVVJMLnRlc3QodXJsKSkge1xuICAgICAgcmV0dXJuIHVybC5yZXBsYWNlKFwid3d3LmRyb3Bib3guY29tXCIsIFwiZGwuZHJvcGJveHVzZXJjb250ZW50LmNvbVwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB1cmwsIHBsYXlpbmcsIGxvb3AsIGNvbnRyb2xzLCBtdXRlZCwgY29uZmlnLCB3aWR0aCwgaGVpZ2h0IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHVzZUF1ZGlvID0gdGhpcy5zaG91bGRVc2VBdWRpbyh0aGlzLnByb3BzKTtcbiAgICBjb25zdCBFbGVtZW50ID0gdXNlQXVkaW8gPyBcImF1ZGlvXCIgOiBcInZpZGVvXCI7XG4gICAgY29uc3Qgc3R5bGUgPSB7XG4gICAgICB3aWR0aDogd2lkdGggPT09IFwiYXV0b1wiID8gd2lkdGggOiBcIjEwMCVcIixcbiAgICAgIGhlaWdodDogaGVpZ2h0ID09PSBcImF1dG9cIiA/IGhlaWdodCA6IFwiMTAwJVwiXG4gICAgfTtcbiAgICByZXR1cm4gLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICBFbGVtZW50LFxuICAgICAge1xuICAgICAgICByZWY6IHRoaXMucmVmLFxuICAgICAgICBzcmM6IHRoaXMuZ2V0U291cmNlKHVybCksXG4gICAgICAgIHN0eWxlLFxuICAgICAgICBwcmVsb2FkOiBcImF1dG9cIixcbiAgICAgICAgYXV0b1BsYXk6IHBsYXlpbmcgfHwgdm9pZCAwLFxuICAgICAgICBjb250cm9scyxcbiAgICAgICAgbXV0ZWQsXG4gICAgICAgIGxvb3AsXG4gICAgICAgIC4uLmNvbmZpZy5hdHRyaWJ1dGVzXG4gICAgICB9LFxuICAgICAgdXJsIGluc3RhbmNlb2YgQXJyYXkgJiYgdXJsLm1hcCh0aGlzLnJlbmRlclNvdXJjZUVsZW1lbnQpLFxuICAgICAgY29uZmlnLnRyYWNrcy5tYXAodGhpcy5yZW5kZXJUcmFjaylcbiAgICApO1xuICB9XG59XG5fX3B1YmxpY0ZpZWxkKEZpbGVQbGF5ZXIsIFwiZGlzcGxheU5hbWVcIiwgXCJGaWxlUGxheWVyXCIpO1xuX19wdWJsaWNGaWVsZChGaWxlUGxheWVyLCBcImNhblBsYXlcIiwgaW1wb3J0X3BhdHRlcm5zLmNhblBsYXkuZmlsZSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/react-player/lib/players/FilePlayer.js\n"));

/***/ })

}]);