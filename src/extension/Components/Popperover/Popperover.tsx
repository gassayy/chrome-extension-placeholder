import { PopperoverCss } from './dirty_css'

export default function Popperover() {
  return (
    <div>
      <style>{PopperoverCss}</style>
      <div className="wrapper">
        Click-based
        <details data-popover="up">
          <summary>Popovers</summary>
          <div>
            <p>
              Popovers are a popular UI element similar to tooltips but supporting much more content than a tooltip
              usually does.
            </p>
            <p>
              Their content is also usually selectable/interactive to the user where tooltip content is usually not.
            </p>
          </div>
          <p>hidden content is hidden</p>
        </details>
        <br />
        using native
        <details data-popover="right">
          <summary> details </summary>
          <div>
            <p>
              The details tag creates a disclosure widget that shows and hides additional information when open or
              closed, without needing any JavaScript.
            </p>
            <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details" target="_blank">
              Docs
            </a>
          </div>
        </details>
        and
        <details data-popover="left">
          <summary> summary </summary>
          <div>
            <p>
              The summary tag marks content within a disclosure that should always be shown. It is also what the user
              can click on to open/close the disclosure.
            </p>
            <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/summary" target="_blank">
              Docs
            </a>
          </div>
        </details>
        tags
        <br />
        and
        <details data-popover="down">
          <summary>only CSS.</summary>
          <div>
            <p>No Javascript.</p>
            <p>No unnecessary DOM.</p>
          </div>
        </details>
      </div>
    </div>
  )
}
