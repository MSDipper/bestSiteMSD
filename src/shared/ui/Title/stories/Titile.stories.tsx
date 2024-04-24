import { Meta, StoryObj } from '@storybook/react'
import { Title } from '../Title'


const meta: Meta<typeof Title> = {
component: Title,
title: 'ui/Title',
}


export default meta
type Story = StoryObj<typeof Title>


export const Normal: Story = {}
Normal.args = {
    size: 'h1',
    children: 'Title'
}