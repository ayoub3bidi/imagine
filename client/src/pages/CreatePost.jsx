import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {preview} from '../assets'
import { getRandomPrompt } from '../utils'
import { FormField, Loader } from '../components'

const CreatePost = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    prompt: '',
    photo: '',
  });
  const [generatingImage, setGeneratingImage] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-white text-[32px]">Create</h1>
        <p className="mt-2 text-white text-[14px] max-w-[500px]">Create imaginative and visually stunning images through DALL-E AI and share them with the community</p>
      </div>
    </section>
  )
}

export default CreatePost