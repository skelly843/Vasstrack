import React from "react";
import { Button } from "@/components/ui/button.jsx";
import { Card, CardContent } from "@/components/ui/card.jsx";
import { motion } from "framer-motion";
import { Flag, Mail, Instagram } from "lucide-react";

export default function VASSTRACKHome() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur bg-black/60 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-lime-500/20 grid place-items-center">
              <Flag className="w-5 h-5 text-lime-400" />
            </div>
            <div className="leading-tight">
              <p className="font-semibold tracking-widest text-lime-400">VASSTRACK</p>
              <p className="text-xs text-white/70">Stay in Your Lane</p>
            </div>
          </div>
          <div />
        </div>
      </header>


      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center">
        <motion.div initial={{opacity:0, y:12}} animate={{opacity:1, y:0}} transition={{duration:0.6}}>
          <Card className="bg-white/5 border-white/10 w-full max-w-md">
            <CardContent className="p-8 text-center">
              <h1 className="text-3xl font-bold tracking-tight text-lime-400">Get in Touch</h1>
              <p className="mt-2 text-white/70">We're here to connect. Reach out with any questions or to learn more about our mission.</p>
              <div className="mt-6 space-y-4">
                <a href="mailto:info@vasstrack.org" className="block w-full">
                  <Button size="lg" className="w-full bg-lime-500 text-black hover:bg-lime-400">
                    <Mail className="mr-2 h-5 w-5"/> Email Us
                  </Button>
                </a>
                <a href="https://instagram.com/vasstrackfitness" target="_blank" rel="noreferrer" className="block w-full">
                  <Button size="lg" variant="outline" className="w-full border-white/30 text-white hover:bg-white/10">
                    <Instagram className="mr-2 h-5 w-5"/> Follow on Instagram
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm text-white/60 space-y-2">
            <p>© {new Date().getFullYear()} VASSTRACK. All rights reserved.</p>
            <div className="flex justify-center items-center gap-4">
              <a className="text-lime-400 hover:underline" href="mailto:info@vasstrack.org">info@vasstrack.org</a>
              <span>·</span>
              <a className="text-lime-400 hover:underline" href="https://instagram.com/vasstrackfitness" target="_blank" rel="noreferrer">@vasstrackfitness</a>
            </div>
        </div>
      </footer>
    </div>
  );
}
