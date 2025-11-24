import { useState } from "react";

export default function ProfileCloneTool() { const [name, setName] = useState(""); const [bio, setBio] = useState(""); const [username, setUsername] = useState(""); const [preview, setPreview] = useState(null); const [coverPreview, setCoverPreview] = useState(null);

const handlePhoto = (e) => { const file = e.target.files[0]; if (file) setPreview(URL.createObjectURL(file)); };

const handleCover = (e) => { const file = e.target.files[0]; if (file) setCoverPreview(URL.createObjectURL(file)); };

return ( <div className="min-h-screen bg-gray-100 p-6 flex justify-center"> <div className="w-full max-w-xl bg-white p-6 rounded-2xl shadow-xl"> <h1 className="text-2xl font-bold mb-4 text-center">Self Profile Builder</h1>

<div className="space-y-4">
      <div>
        <label className="font-semibold">Name</label>
        <input
          className="w-full p-2 border rounded-xl"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your profile name"
        />
      </div>

      <div>
        <label className="font-semibold">Username</label>
        <input
          className="w-full p-2 border rounded-xl"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="yourname123"
        />
      </div>

      <div>
        <label className="font-semibold">Bio</label>
        <textarea
          className="w-full p-2 border rounded-xl"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          placeholder="Type your bio"
        ></textarea>
      </div>

      <div>
        <label className="font-semibold">Profile Photo</label>
        <input type="file" onChange={handlePhoto} />
        {preview && <img src={preview} className="mt-2 w-32 h-32 rounded-full object-cover" />}
      </div>

      <div>
        <label className="font-semibold">Cover Photo</label>
        <input type="file" onChange={handleCover} />
        {coverPreview && <img src={coverPreview} className="mt-2 w-full rounded-xl object-cover" />}
      </div>

      <div className="mt-6 p-4 border rounded-2xl bg-gray-50">
        <h2 className="text-lg font-bold mb-2">Live Preview</h2>
        <div className="space-y-2">
          {coverPreview && (
            <img src={coverPreview} className="w-full rounded-xl object-cover" />
          )}
          {preview && (
            <img
              src={preview}
              className="w-24 h-24 rounded-full object-cover border"
            />
          )}
          <h3 className="text-xl font-semibold">{name || "Your Name"}</h3>
          <p className="text-gray-700">@{username || "username"}</p>
          <p className="text-gray-600">{bio || "Your bio will appear here."}</p>
        </div>
      </div>
    </div>
  </div>
</div>

); }
