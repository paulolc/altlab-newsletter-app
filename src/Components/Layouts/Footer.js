import React from "react"
import {Paper, Tabs, Tab} from "@material-ui/core"

export default ({categories, category, onSelect}) => {
  const index = category
    ? categories.findIndex((group) => group === category) + 1
    : 0

  const onIndexSelect = (e, index) =>
    onSelect(index === 0 ? "" : categories[index - 1])

  return (
    <Paper>
      <Tabs
        value={index}
        indicatorColor="primary"
        onChange={onIndexSelect}
        textColor="primary"
        centered
      >
        <Tab label="Todos" />
        {categories.map((group) => (
          <Tab label={group} />
        ))}
      </Tabs>
    </Paper>
  )
}
