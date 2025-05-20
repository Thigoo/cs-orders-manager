import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/hooks/use-auth";

export const RegisterView = () => {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await register({ name, email, password });
      navigate("/");
    } catch (error) {
      console.log("Error registering", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card className="w-[350px] p-4">
        <CardContent>
          <h1 className="text-xl font-semibold mb-4 text-center">Register</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Register
            </Button>
          </form>
          <p className="text-xs text-center mt-4">
            Already have an account?{" "}
            <Link to="/login" className="underline text-blue-600">
              Login
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
