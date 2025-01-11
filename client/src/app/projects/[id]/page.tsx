"use client"

import React, { useState, useEffect } from 'react'
import ProjectHeader from '@/app/projects/projectHeader'
import BoardView from '../BoardView';
import ListView from '../ListView';
import Timeline from '../Timeline';
import Table from "../Table"
import ModalNewTask from '@/components/ModalNewTask';

interface Params {
  id: string;
}

type Props = {
  params: { id: string };
}

const Project = ({ params }: Props) => {
  const [id, setId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('Board');
  const [isModalNewTaskOpen, setIsModalNewTaskOpen] = useState(false);
  useEffect(() => {
    // Unwrap the params if it's a Promise
    const fetchParams = async () => {
      const resolvedParams: Params = await params; // Await the promise if params is a Promise
      setId(resolvedParams.id);
    };

    fetchParams();
  }, [params]);

  if (!id) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <ModalNewTask
        isOpen={isModalNewTaskOpen}
        onClose={() => setIsModalNewTaskOpen(false)}
        id={id}
      />
      <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === 'Board' && (
        <BoardView id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
      )}
      {activeTab === 'List' && (
        <ListView id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
      )}
      {activeTab === 'Timeline' && (
        <Timeline id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
      )}
      {activeTab === 'Table' && (
        <Table id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
      )}
    </div>
  )
}

export default Project
