import React from 'react'

import '../AboutScreen/styles/style.scss'

import '../QuestionScreen/styles/style.scss'
import Form from '../../components/Form/Form.jsx'

const Quest = () => {
  return (
    <div className='quest'>
      <h1 className="quest__text">Остались вопросы?</h1>
      <hr className="about__separatop" />
      <p className="quest__par">
        Cargo Express PV — это компания с собственным вагонным парком,
        сфокусированная на предоставление безупречного сервиса казахстанским
        грузоотправителям.
      </p>
      <Form />
    </div>
  )
}

export default Quest