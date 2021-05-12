import React from 'react'
import translate from './i18n/translate'

function report() {
  return (
    <div>
      {translate('report')}: {2+2}
    </div>
  )
}

export default report
