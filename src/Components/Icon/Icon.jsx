import React from 'react'

function Icon({ iconName }) {
    const TagName = require(`../../Assets/img/category/${iconName}`)[iconName]
    return !!TagName ? <TagName/> : ""
}

export default Icon
